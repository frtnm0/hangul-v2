import { datasets } from '../data';
import { Header } from '../components/Header';
import { MainMenu } from '../components/MainMenu';

interface HomeViewProps {
    onSelectDataset: (id: string) => void;
    onSelectHangul: () => void;
}

export function HomeView({ onSelectDataset, onSelectHangul }: HomeViewProps) {
    return (
        <div className="flex-1 flex flex-col items-center">
            <Header title="Hangul V2" />
            <div className="w-full flex-1 pt-6 overflow-y-auto pb-safe">
                <div className="w-full max-w-4xl mx-auto px-4 mb-8">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-100 mb-2">Learn Korean.</h2>
                    <p className="text-zinc-400 text-lg">Master Hangul, understand numbers, and grow your vocabulary.</p>
                </div>
                <MainMenu datasets={datasets} onSelectDataset={onSelectDataset} onSelectHangul={onSelectHangul} />
            </div>
        </div>
    );
}
