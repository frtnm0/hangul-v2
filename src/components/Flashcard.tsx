import { useState, useEffect, useCallback, useRef } from 'react';
import type { FlashcardItem } from '../data';
import { ProgressBar } from './ProgressBar';
import { Shuffle, ArrowRightLeft, Volume2, Eye, EyeOff, ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';

interface FlashcardProps {
    items: FlashcardItem[];
    onComplete?: () => void;
}

export function Flashcard({ items, onComplete }: FlashcardProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    // Settings
    const [isRandom, setIsRandom] = useState(false);
    const [showRomanization, setShowRomanization] = useState(false);
    const [autoPlayAudio, setAutoPlayAudio] = useState(true);

    // Audio state
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // For random mode, we want to maintain a history to go back
    const [history, setHistory] = useState<number[]>([0]);

    const currentItem = items[currentIndex];

    const playAudio = useCallback((item: FlashcardItem) => {
        // If we have custom audio, play it
        if (item.audioFile) {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }
            const audio = new Audio(item.audioFile);
            audioRef.current = audio;
            audio.play().catch(e => console.error("Error playing audio", e));
        }
        // Otherwise fallback to Web Speech API
        else if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(item.korean);
            utterance.lang = 'ko-KR';
            utterance.rate = 0.9;
            window.speechSynthesis.speak(utterance);
        }
    }, []);

    // Clean up audio on unmount
    useEffect(() => {
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
            }
            window.speechSynthesis.cancel();
        }
    }, []);

    useEffect(() => {
        if (autoPlayAudio && !isFlipped) {
            playAudio(currentItem);
        }
    }, [currentIndex, isFlipped, autoPlayAudio, currentItem, playAudio]);

    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleNext = () => {
        setIsTransitioning(true);
        setIsFlipped(false);
        setTimeout(() => setIsTransitioning(false), 50);


        if (isRandom) {
            let nextIdx = Math.floor(Math.random() * items.length);
            // Try not to repeat immediately
            if (nextIdx === currentIndex && items.length > 1) {
                nextIdx = (nextIdx + 1) % items.length;
            }
            setCurrentIndex(nextIdx);
            setHistory(prev => [...prev.slice(-10), nextIdx]); // Keep last 10 in history
        } else {
            if (currentIndex < items.length - 1) {
                const nextIdx = currentIndex + 1;
                setCurrentIndex(nextIdx);
                setHistory(prev => [...prev, nextIdx]);
            } else if (onComplete) {
                onComplete();
            }
        }
    };

    const handlePrev = () => {
        setIsTransitioning(true);
        setIsFlipped(false);
        setTimeout(() => setIsTransitioning(false), 50);

        if (isRandom) {
            if (history.length > 1) {
                const newHistory = [...history];
                newHistory.pop(); // remove current
                const prevIdx = newHistory[newHistory.length - 1];
                setHistory(newHistory);
                setCurrentIndex(prevIdx);
            }
        } else {
            if (currentIndex > 0) {
                const nextIdx = currentIndex - 1;
                setCurrentIndex(nextIdx);
                setHistory(prev => {
                    const h = [...prev]; h.pop(); return h;
                });
            }
        }
    };

    return (
        <div className="w-full max-w-lg mx-auto flex flex-col items-center animate-in zoom-in-95 duration-500">

            {/* Top Controls */}
            <div className="flex w-full items-center justify-between mb-6 bg-zinc-900/50 p-2 rounded-xl border border-zinc-800">
                <button
                    onClick={() => setIsRandom(!isRandom)}
                    className={`p-2.5 rounded-lg transition-colors flex items-center gap-2 text-sm font-medium ${isRandom ? 'bg-blue-500/20 text-blue-400' : 'text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200'}`}
                    title={isRandom ? "Random Order" : "Sequential Order"}
                >
                    {isRandom ? <Shuffle className="w-4 h-4" /> : <ArrowRightLeft className="w-4 h-4" />}
                    <span className="hidden sm:inline">{isRandom ? 'Random' : 'Sequential'}</span>
                </button>

                <button
                    onClick={() => setAutoPlayAudio(!autoPlayAudio)}
                    className={`p-2.5 rounded-lg transition-colors flex items-center gap-2 text-sm font-medium ${autoPlayAudio ? 'bg-green-500/20 text-green-400' : 'text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200'}`}
                    title={autoPlayAudio ? "Autoplay On" : "Autoplay Off"}
                >
                    <Volume2 className="w-4 h-4" />
                    <span className="hidden sm:inline">Autoplay</span>
                </button>

                <button
                    onClick={() => setShowRomanization(!showRomanization)}
                    className={`p-2.5 rounded-lg transition-colors flex items-center gap-2 text-sm font-medium ${showRomanization ? 'bg-purple-500/20 text-purple-400' : 'text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200'}`}
                    title={showRomanization ? "Hide Romanization" : "Show Romanization"}
                >
                    {showRomanization ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                    <span className="hidden sm:inline">Rom</span>
                </button>
            </div>

            {!isRandom && (
                <div className="w-full mb-8">
                    <ProgressBar current={currentIndex + 1} total={items.length} />
                </div>
            )}

            {/* Main Card */}
            <div
                className={`relative w-full aspect-[4/3] max-h-[400px] cursor-pointer perspective-1000 group ${isFlipped ? 'flipped' : ''}`}
                onClick={() => setIsFlipped(!isFlipped)}
            >
                <div className={`w-full h-full transform-style-3d shadow-xl rounded-2xl ${isTransitioning ? 'duration-0' : 'transition-transform duration-500'} ${isFlipped ? 'rotate-y-180' : ''}`}>

                    {/* Front */}
                    <div className="absolute inset-0 w-full h-full backface-hidden bg-zinc-900 border-2 border-zinc-800 rounded-2xl flex flex-col items-center justify-center p-8 group-hover:border-blue-500/50 transition-colors">
                        <h2 className="text-7xl sm:text-8xl md:text-9xl font-bold font-korean text-[#ff8c00] mb-6 drop-shadow-md">{currentItem.korean}</h2>
                        {showRomanization && (
                            <p className="text-xl sm:text-2xl text-blue-400 font-medium tracking-wide">{currentItem.romanization}</p>
                        )}

                        <button
                            onClick={(e) => { e.stopPropagation(); playAudio(currentItem); }}
                            className="absolute top-4 right-4 p-3 rounded-full bg-zinc-800/80 text-zinc-300 hover:bg-blue-500 hover:text-white transition-all"
                        >
                            <Volume2 className="w-6 h-6" />
                        </button>
                        <div className="absolute bottom-4 text-zinc-600 text-sm font-medium flex items-center gap-1">
                            <RotateCcw className="w-4 h-4" /> Tap to flip
                        </div>
                    </div>

                    {/* Back */}
                    <div className="absolute inset-0 w-full h-full backface-hidden bg-zinc-800 border-2 border-zinc-700/50 rounded-2xl flex flex-col items-center justify-center p-8 rotate-y-180 shadow-2xl shadow-blue-900/10">
                        <p className="text-zinc-400 text-lg uppercase tracking-widest font-semibold mb-2">Meaning</p>
                        <h2 className="text-4xl sm:text-5xl font-bold text-white text-center">{currentItem.meaning}</h2>

                        <div className="absolute bottom-4 text-zinc-500 text-sm font-medium flex items-center gap-1">
                            <RotateCcw className="w-4 h-4" /> Tap to flip back
                        </div>
                    </div>

                </div>
            </div>

            {/* Navigation */}
            <div className="flex w-full items-center justify-between mt-10 px-4">
                <button
                    onClick={handlePrev}
                    disabled={!isRandom && currentIndex === 0}
                    className="p-4 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 disabled:opacity-30 disabled:hover:bg-zinc-900 transition-all active:scale-95"
                    title="Previous Card"
                >
                    <ChevronLeft className="w-8 h-8" />
                </button>

                <div className="text-sm font-semibold text-zinc-500 tracking-widest uppercase">
                    {isRandom ? 'Random Mode' : `${currentIndex + 1} of ${items.length}`}
                </div>

                <button
                    onClick={handleNext}
                    className="p-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-lg hover:shadow-blue-500/25 active:scale-95 flex items-center"
                    title="Next Card"
                >
                    <ChevronRight className="w-8 h-8" />
                </button>
            </div>

        </div>
    );
}
