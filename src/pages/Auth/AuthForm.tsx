import userIcon from '../../assets/user.png'
import passwordIcon from '../../assets/lock.png'
import eyeOpenIcon from '../../assets/view.png'
import eyeCloseIcon from '../../assets/hide.png'
import {useState} from "react";

export const AuthForm = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const onClickBtnHandler = () => {
        setShowPassword((prevState) => !prevState)
    }

    return (
        <form className={'w-full flex flex-col gap-[20px]'}>
            <div className={'flex flex-col relative'}>
                <label htmlFor={'login'}>Логин</label>
                <span className={'absolute top-[40px] left-[15px]'}>
                        <img src={userIcon} alt="userIcon" className={'w-[15px]'}/>
                </span>
                <input placeholder={'Введите логин'} id={'login'}
                       className={'border border-gray-500 rounded-[5px] px-[10px] py-[10px] pl-10'}/>
            </div>
            <div className={'flex flex-col relative'}>
                <label htmlFor={'password'}>Логин</label>
                <span className={'absolute top-[40px] left-[15px]'}>
                        <img src={passwordIcon} alt="passwordIcon" className={'w-[15px]'}/>
                </span>
                <input placeholder={'Введите пароль'} id={'password'}
                       className={'border border-gray-500 rounded-[5px] px-[10px] py-[10px] pl-10'}
                       type={showPassword ? 'password' : 'text'}/>
                <button onClick={onClickBtnHandler} className={'absolute right-[15px] top-[40px]'} type={'button'}>
                    <img src={showPassword ? eyeCloseIcon : eyeOpenIcon} alt={showPassword ? 'eyeOpen' : 'eyeClose'}
                         className={'w-[15px]'}/>
                </button>
            </div>

            <div className={'flex justify-between'}>
                <div className={'flex gap-[5px]'}>
                    <input type={'checkbox'} id={'rememberMe'}/>
                    <label htmlFor={'rememberMe'}>Запомнить меня</label>
                </div>

                <button className={'text-[#9a114e]'} type={'button'}>Восстановить пароль</button>
            </div>

            <button type={'submit'} className={'bg-[#9a114e] text-white py-[10px] rounded-[10px]'}>Войти</button>
        </form>
    );
};
