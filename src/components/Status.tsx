import type {ProjectStatus} from "./Progress.tsx";


type StatusProps = {
    status: ProjectStatus
}

const statusColors: Record<ProjectStatus, string> = {
    "Активный": "bg-green-100 text-green-900",
    "Планирование": "bg-yellow-500 text-yellow-700",
    "Завершен": "bg-green-500 text-green-700",
    "Приостановлен": "bg-gray-400 text-gray-700",
};

export const Status = ({status}: StatusProps) => {
    const colorClass = statusColors[status];

    return (
        <div className={`p-1 ${colorClass} w-fit rounded-[10px] text-[14px] bg-gree`}>
            {status}
        </div>
    );
};
