import searchIcon from '../../assets/search-interface-symbol.png'

export const DashboardHead = () => {
    return (
        <div className={'w-full border-b p-5 border-[#d9d9d9] flex justify-between items-center'}>
            <h1 className={'text-[30px] font-semibold'}>Управление проектами</h1>
            <div className={'flex gap-[15px] items-center'}>
                <img src={searchIcon} alt="search_icon" className={'w-[15px] h-[15px]'}/>

                <div className={'flex gap-[10px]'}>
                    <button>KZ</button>
                    <span>|</span>
                    <button>RU</button>
                </div>
            </div>
        </div>
    );
};
