interface ProgressBarProps {
    current: number;
    total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
    const percentage = Math.max(0, Math.min(100, Math.round((current / total) * 100))) || 0;

    return (
        <div className="w-full">
            <div className="flex justify-between text-xs font-medium text-zinc-400 mb-1.5 px-0.5">
                <span>Progress</span>
                <span>{current} / {total}</span>
            </div>
            <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden">
                <div
                    className="h-full bg-blue-500 transition-all duration-300 ease-out rounded-full"
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    );
}
