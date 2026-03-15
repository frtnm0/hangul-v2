import { useState } from 'react';
import { Header } from '../components/Header';
import { Flashcard } from '../components/Flashcard';
import type { FlashcardItem } from '../data';

interface FlashcardViewProps {
    title: string;
    items: FlashcardItem[];
    onBack: () => void;
    initialRandom?: boolean;
    initialShowRomanization?: boolean;
}

export function FlashcardView({ 
    title, 
    items, 
    onBack, 
    initialRandom = false, 
    initialShowRomanization = false 
}: FlashcardViewProps) {
    const [isCompleted, setIsCompleted] = useState(false);

    return (
        <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
            <Header title={title} onBack={onBack} />

            <div className="flex-1 overflow-y-auto px-4 py-8 pb-32 flex flex-col">
                {!isCompleted ? (
                    <div className="flex-1 flex flex-col justify-center max-w-4xl mx-auto w-full">
                        <Flashcard
                            items={items}
                            initialRandom={initialRandom}
                            initialShowRomanization={initialShowRomanization}
                            onComplete={() => setIsCompleted(true)}
                        />
                    </div>
                ) : (
                    <div className="flex-1 flex flex-col items-center justify-center animate-in zoom-in duration-500">
                        <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl max-w-sm w-full text-center">
                            <h2 className="text-3xl font-bold text-zinc-100 mb-4">Great Job! 🎉</h2>
                            <p className="text-zinc-400 mb-8">You have completed the {title} deck.</p>

                            <div className="space-y-3">
                                <button
                                    onClick={() => setIsCompleted(false)}
                                    className="w-full py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-xl font-medium transition-colors"
                                >
                                    Review Again
                                </button>
                                <button
                                    onClick={onBack}
                                    className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-colors shadow-lg hover:shadow-blue-500/20"
                                >
                                    Back to Menu
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
