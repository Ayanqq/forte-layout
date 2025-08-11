import {Progress, type ProjectStatus} from "../../components/Progress.tsx";
import {Status} from "../../components/Status.tsx";
import {Line} from "../../components/Line.tsx";
import dotsIcon from '../../assets/dots.png'
import calendarIcon from '../../assets/calendar.png'
import clockIcon from '../../assets/clock.png'
import coupleIcon from '../../assets/couple.png'

type ProjectType = {
    name: string;
    description: string;
    status: ProjectStatus;
    progress: number;
    date: string;
    amount: number;
    deadline: number;

}

export const Project = ({name, description, date, amount, deadline, progress, status}: ProjectType) => {
    return (
        <div className={'max-w-[350px] w-full p-[20px] flex flex-col gap-[20px] bg-white rounded-[20px]'}>
            <div className={'flex justify-between items-center'}>
                <Line status={status}/>
                <img src={dotsIcon} alt="dots_icon" className={'w-[20px]'}/>
            </div>

            <h3 className={'font-semibold text-[24px]'}>{name}</h3>

            <span className={'text-[16px] text-gray-500'}>{description}</span>

            <Status status={status}/>
            <Progress value={progress} status={status}/>
            <div className={'flex gap-[20px]'}>
                <span className={'flex gap-[5px] text-gray-500 text-[12px] items-center'}>
                    <img src={calendarIcon} alt={'calendar icon'} className={'w-[10px] h-[10px]'}/>
                    {date}
                </span>
                <span className={'flex gap-[5px] text-gray-500 text-[12px] items-center'}>
                    <img src={coupleIcon} alt={'couple icon'} className={'w-[10px] h-[10px]'}/>
                    {amount}
                </span>
                <span className={'flex gap-[5px] text-gray-500 text-[12px] items-center'}>
                    <img src={clockIcon} alt={'clock icon'} className={'w-[10px] h-[10px]'}/>
                    {deadline} дня
                </span>
            </div>

        </div>
    );
};
