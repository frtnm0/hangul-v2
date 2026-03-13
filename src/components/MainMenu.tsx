import type { Dataset } from '../data';
import { LayoutGrid, Library, BookOpen } from 'lucide-react';

interface MainMenuProps {
    datasets: Dataset[];
    onSelectDataset: (datasetId: string) => void;
    onSelectHangul: () => void;
}

export function MainMenu({ datasets, onSelectDataset, onSelectHangul }: MainMenuProps) {
    return (
        <div className="w-full max-w-4xl mx-auto p-4 md:p-6 space-y-8 animate-in fade-in duration-500">

            <section className="space-y-4">
                <h2 className="text-lg font-semibold text-zinc-300 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-zinc-500" />
                    Reference
                </h2>
                <div
                    onClick={onSelectHangul}
                    className="group relative overflow-hidden bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-700 p-6 rounded-2xl cursor-pointer transition-all hover:shadow-lg hover:shadow-blue-500/5 select-none active:scale-[0.98]"
                >
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                        <LayoutGrid className="w-24 h-24" />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-100 mb-2">Hangul Chart</h3>
                    <p className="text-zinc-400 text-sm max-w-[80%]">Complete reference chart for Korean vowels, consonants, and combinations.</p>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-lg font-semibold text-zinc-300 flex items-center gap-2">
                    <Library className="w-5 h-5 text-zinc-500" />
                    Flashcards
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {datasets.map((ds) => (
                        <div
                            key={ds.id}
                            onClick={() => onSelectDataset(ds.id)}
                            className="group relative overflow-hidden bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-700 p-5 rounded-2xl cursor-pointer transition-all hover:shadow-lg hover:shadow-blue-500/5 select-none flex flex-col h-full active:scale-[0.98]"
                        >
                            <div className="flex-1">
                                <h3 className="text-lg font-bold text-zinc-100 mb-1.5 group-hover:text-blue-400 transition-colors">{ds.title}</h3>
                                <p className="text-zinc-400 text-sm mb-4 leading-relaxed">{ds.description}</p>
                            </div>
                            <div className="text-xs font-medium text-zinc-500 bg-zinc-950/50 w-fit px-2.5 py-1 rounded-md border border-zinc-800/50">
                                {ds.items.length} cards
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}
