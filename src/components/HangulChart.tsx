import type { HangulItem } from '../data';

interface HangulSectionProps {
    title: string;
    items: HangulItem[];
}

function HangulSection({ title, items }: HangulSectionProps) {
    return (
        <div className="mb-8">
            <h3 className="text-lg font-semibold text-zinc-300 mb-4">{title}</h3>
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-3">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-col items-center justify-center p-3 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-blue-500/50 transition-colors"
                    >
                        <span className="text-3xl font-bold font-korean text-[#ff8c00] mb-1">{item.character}</span>
                        <span className="text-sm font-medium text-zinc-100">{item.romanization}</span>
                        {item.description && (
                            <span className="text-[10px] text-zinc-100 text-center mt-1 leading-tight hidden sm:block">
                                {item.description}
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

interface HangulChartProps {
    consonants: HangulItem[];
    doubleConsonants: HangulItem[];
    vowels: HangulItem[];
    combinedVowels: HangulItem[];
}

export function HangulChart({ consonants, doubleConsonants, vowels, combinedVowels }: HangulChartProps) {
    return (
        <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
            <HangulSection title="Basic Consonants" items={consonants} />
            <HangulSection title="Double Consonants" items={doubleConsonants} />
            <HangulSection title="Basic Vowels" items={vowels} />
            <HangulSection title="Combined Vowels" items={combinedVowels} />
        </div>
    );
}
