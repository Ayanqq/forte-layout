import logo from '../../assets/forte.svg'
import {AuthForm} from "./AuthForm.tsx";

export const Auth = () => {
    return (
        <div className={'flex justify-center items-center h-screen bg-cyan-50'}>
            <div
                className={'flex justify-center items-center flex-col bg-white px-[20px] py-[20px] rounded-[10px] gap-[20px]'}>
                <img src={logo} alt={'forte logo'} className={'w-[250px]'}/>
                <div className={'flex gap-[20px]'}>
                    <div className={'px-[50px] py-[5px] bg-[#9a114e] text-white rounded-[10px]'}>
                        Авторизация
                    </div>
                    <div className={'px-[20px] py-[5px] bg-[#b9b9b9] text-black rounded-[10px]'}>
                        Добро Пожаловать!
                    </div>
                </div>
                <AuthForm/>
            </div>
        </div>
    );
};
