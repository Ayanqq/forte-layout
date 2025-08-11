import type {ProjectStatus} from "./Progress.tsx";


type StatusProps = {
    status: ProjectStatus
}

const statusColors: Record<ProjectStatus, string> = {
    "Активный": "bg-purple-500",
    "Планирование": "bg-green-500",
    "Завершен": "bg-red-500",
    "Приостановлен": "bg-pink-400",
};

export const Line = ({status}: StatusProps) => {
    const colorClass = statusColors[status];


    return (
        <div
            className={`bg-gray-200 rounded-full h-1 overflow-hidden w-[30px]`}
        >
            <div
                className={`${colorClass} h-full transition-all`}
            />
        </div>
    );
};
