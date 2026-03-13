import { Header } from '../components/Header';
import { HangulChart } from '../components/HangulChart';
import { allHangul } from '../data';

interface HangulChartViewProps {
    onBack: () => void;
}

export function HangulChartView({ onBack }: HangulChartViewProps) {
    const consonants = allHangul.filter(h => h.type === 'consonant');
    const doubleConsonants = allHangul.filter(h => h.type === 'double-consonant');
    const vowels = allHangul.filter(h => h.type === 'vowel');
    const combinedVowels = allHangul.filter(h => h.type === 'combined-vowel');

    return (
        <div className="flex-1 flex flex-col h-screen">
            <Header title="Hangul Reference Chart" onBack={onBack} />
            <div className="flex-1 overflow-y-auto px-4 py-8 pb-32">
                <div className="max-w-4xl mx-auto">
                    <HangulChart
                        consonants={consonants}
                        doubleConsonants={doubleConsonants}
                        vowels={vowels}
                        combinedVowels={combinedVowels}
                    />
                </div>
            </div>
        </div>
    );
}
