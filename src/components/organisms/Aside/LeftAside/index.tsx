import {ChevronRight, Settings} from "lucide-react";
import {IconButton} from "../../../atoms/Buttons/IconButton";

export const LeftAsideOrganism = () => {
    return (
        <figure className="w-full bg-white shadow-xl rounded-lg p-4 space-y-5">
            <h2 className={'text-slate-500 text-xl'}>Навигация</h2>
            <div className="flex flex-col space-y-3 items-start">
                <a href="#!"
                   className={'text-lg w-full flex items-center justify-between text-blue-500 transition-all duration-300 hover:text-blue-500'}>
                    <span>Главная</span>
                    <ChevronRight/>
                </a>
                <a href="#!"
                   className={'text-lg w-full flex items-center justify-between text-neutral-400 transition-all duration-300 hover:text-blue-500'}>
                    <span>Главная</span>
                    <ChevronRight/>
                </a>
                <a href="#!"
                   className={'text-lg w-full flex items-center justify-between text-neutral-400 transition-all duration-300 hover:text-blue-500'}>
                    <span>Главная</span>
                    <ChevronRight/>
                </a>
                <a href="#!"
                   className={'text-lg w-full flex items-center justify-between text-neutral-400 transition-all duration-300 hover:text-blue-500'}>
                    <span>Главная</span>
                    <ChevronRight/>
                </a>
            </div>
            <div className="flex justify-center">
                <IconButton Icon={Settings} iconSize={20}>Настройки</IconButton>
            </div>
        </figure>
    )
}