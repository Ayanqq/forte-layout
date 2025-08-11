export type ProjectStatus = "Активный" | "Планирование" | "Завершен" | "Приостановлен";

type ProgressProps = {
    value: number;
    status: ProjectStatus;
    className?: string;
};

const statusColors: Record<ProjectStatus, string> = {
    "Активный": "bg-purple-500",
    "Планирование": "bg-green-500",
    "Завершен": "bg-red-500",
    "Приостановлен": "bg-pink-400",
};

export const Progress = ({value, status, className}: ProgressProps) => {
    const colorClass = statusColors[status];

    return (
        <div className={'flex flex-col gap-[5px]'}>
            <div className={'flex justify-between'}>
                <span>Прогресс</span>
                <span className={'font-semibold'}>{value}%</span>
            </div>

            <div
                className={`bg-gray-200 rounded-full h-2 overflow-hidden ${className} w-full`}
            >
                <div
                    className={`${colorClass} h-full transition-all`}
                    style={{width: `${value}%`}}
                />
            </div>
        </div>
    );
};
