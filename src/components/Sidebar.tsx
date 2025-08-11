import logo from '../assets/forte.svg'
import homeIcon from '../assets/home.png'
import folderIcon from '../assets/folder.png'
import projectsIcon from '../assets/layer.png'
import userIcon from '../assets/user_dashboard.png'


export const Sidebar = () => {
    return (
        <aside className="fixed h-screen bg-[#f2f2f2] text-black flex flex-col border-r border-[#d9d9d9]">

            <div className="p-[20px] border-b w-[250px] border-[#d9d9d9]">
                <img src={logo} alt={'forte logo'}/>
            </div>

            <nav className="text-[20px] pl-[10px] pt-[20px]">
                <ul className="space-y-2">
                    <li>
                        <a href="/" className="flex gap-[10px] items-center">
                            <img src={homeIcon} alt="home_icon" className={'w-[15px] h-[15px]'}/>
                            Главная
                        </a>
                    </li>
                    <li>
                        <a href="/" className="flex gap-[10px] items-center">
                            <img src={folderIcon} alt="tickets_icon" className={'w-[15px] h-[15px]'}/>
                            Заявки
                        </a>
                    </li>
                    <li>
                        <a href="/" className="flex gap-[10px] items-center">
                            <img src={projectsIcon} alt="projects_icon" className={'w-[15px] h-[15px]'}/>
                            Проекты
                        </a>
                    </li>
                    <li>
                        <a href="/" className="flex gap-[10px] items-center">
                            <img src={userIcon} alt="profile_icon" className={'w-[15px] h-[15px]'}/>
                            Профиль
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};
