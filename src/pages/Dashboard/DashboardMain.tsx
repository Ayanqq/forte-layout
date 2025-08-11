import {DashboardProjects} from "./DashboardProjects.tsx";
import {mock_data} from "./mocks/mock_data.ts";

export const DashboardMain = () => {
    return (
        <div className={'flex flex-col p-5 gap-[20px]'}>
            <div className={'flex items-center gap-[20px]'}>
                <h2 className={'text-[30px] font-semibold'}>Все проекты</h2>
                <div className={'bg-gray-400 px-[10px] text-white rounded-[20px]'}>
                    {mock_data.length} проектов
                </div>
            </div>
            <DashboardProjects/>
        </div>
    );
};
