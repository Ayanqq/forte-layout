import {mock_data} from "./mocks/mock_data.ts";
import {Project} from "./Project.tsx";

export const DashboardProjects = () => {
    return (
        <div className={'flex gap-[30px] flex-wrap'}>
            {mock_data.map(el => {
                return (
                    <Project
                        key={el.id}
                        status={el.status}
                        amount={el.amount}
                        date={el.date}
                        deadline={el.deadline}
                        description={el.description}
                        name={el.name}
                        progress={el.progress}
                    />
                );
            })}
        </div>
    );
};
