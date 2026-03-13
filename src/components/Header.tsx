import { ArrowLeft, BookOpen } from 'lucide-react';

interface HeaderProps {
    title: string;
    onBack?: () => void;
}

export function Header({ title, onBack }: HeaderProps) {
    return (
        <header className="p-4 border-b border-zinc-900 bg-zinc-950/80 backdrop-blur top-0 sticky z-10 w-full">
            <div className="max-w-4xl mx-auto flex items-center gap-3">
                {onBack && (
                    <button
                        onClick={onBack}
                        className="p-2 -ml-2 hover:bg-zinc-900 rounded-full transition-colors active:scale-95"
                        aria-label="Go back"
                    >
                        <ArrowLeft className="w-5 h-5 text-zinc-400" />
                    </button>
                )}
                {!onBack && <BookOpen className="w-6 h-6 text-blue-500" />}
                <h1 className="text-lg sm:text-xl font-bold tracking-tight text-zinc-100">{title}</h1>
            </div>
        </header>
    );
}
