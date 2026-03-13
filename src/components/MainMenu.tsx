import { useState } from 'react';
import type { Dataset } from '../data';
import { LayoutGrid, Library, BookOpen, Layers, Check, Compass } from 'lucide-react';

interface MainMenuProps {
    datasets: Dataset[];
    onSelectDataset: (datasetId: string) => void;
    onSelectMixed: (datasetIds: string[]) => void;
    onSelectHangul: () => void;
    onSelectLearningPath: () => void;
}

export function MainMenu({ datasets, onSelectDataset, onSelectMixed, onSelectHangul, onSelectLearningPath }: MainMenuProps) {
    const [selectedIds, setSelectedIds] = useState<string[]>([]);

    const toggleDataset = (id: string) => {
        setSelectedIds(prev =>
            prev.includes(id)
                ? prev.filter(i => i !== id)
                : [...prev, id]
        );
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-4 md:p-6 space-y-8 animate-in fade-in duration-500">

            <section className="space-y-4">
                <h2 className="text-lg font-semibold text-zinc-300 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-zinc-500" />
                    Reference
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div
                        onClick={onSelectLearningPath}
                        className="group relative overflow-hidden bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-700 p-6 rounded-2xl cursor-pointer transition-all hover:shadow-lg hover:shadow-blue-500/5 select-none active:scale-[0.98]"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-15 transition-opacity text-blue-500">
                            <Compass className="w-24 h-24" />
                        </div>
                        <h3 className="text-xl font-bold text-zinc-100 mb-2 flex items-center gap-2">
                            Learning Path
                            <span className="text-[10px] font-bold bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full uppercase tracking-tighter">New</span>
                        </h3>
                        <p className="text-zinc-400 text-sm max-w-[80%]">The optimized 8-step roadmap to go from absolute zero to basic communication.</p>
                    </div>
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

                </div>
            </section>

            <section className="space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-zinc-300 flex items-center gap-2">
                        <Layers className="w-5 h-5 text-zinc-500" />
                        Mixed Session
                    </h2>
                    {selectedIds.length > 0 && (
                        <button
                            onClick={() => onSelectMixed(selectedIds)}
                            className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-1.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-blue-500/20 active:scale-95 animate-in slide-in-from-right-4"
                        >
                            Start Mix Mode ({selectedIds.length})
                        </button>
                    )}
                </div>
                <div className="flex flex-wrap gap-2">
                    {datasets.map(ds => (
                        <button
                            key={ds.id}
                            onClick={() => toggleDataset(ds.id)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all select-none ${selectedIds.includes(ds.id)
                                ? 'bg-blue-500/20 border-blue-500/50 text-blue-400'
                                : 'bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                                }`}
                        >
                            {selectedIds.includes(ds.id) && <Check className="w-4 h-4" />}
                            <span className="text-sm font-medium">{ds.title}</span>
                        </button>
                    ))}
                </div>
                {selectedIds.length === 0 && (
                    <p className="text-zinc-500 text-sm italic">Select two or more datasets above to create a custom mixed session.</p>
                )}
            </section>

            <section className="space-y-4">
                <h2 className="text-lg font-semibold text-zinc-300 flex items-center gap-2">
                    <Library className="w-5 h-5 text-zinc-500" />
                    Standard Decks
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
