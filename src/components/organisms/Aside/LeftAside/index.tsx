import {ChevronRight, Settings} from "lucide-react";
import {IconButton} from "../../../atoms/Buttons/IconButton";
import {useLocation} from "react-router-dom";
import {ROUTES} from "../../../../constants.ts";

export const LeftAsideOrganism = () => {

    const pathname = useLocation().pathname;
    return (
        <figure className="w-full bg-white shadow-xl rounded-lg p-4 space-y-5">
            <h2 className={'text-slate-500 text-xl'}>Навигация</h2>
            <div className="flex flex-col space-y-3 items-start">
                {ROUTES.map((route, index) => {
                    if (route.show_in_nav) {
                        return (
                            <a key={index} href={route.path}
                               className={`text-lg w-full flex items-center justify-between ${pathname == route.path ? 'text-blue-500' : 'text-neutral-400'} transition-all duration-300 hover:text-blue-500`}>
                                <span>{route.name}</span>
                                <ChevronRight/>
                            </a>
                        )
                    }
                })}
            </div>
            <div className="flex justify-center">
                <IconButton Icon={Settings} iconSize={20}>Настройки</IconButton>
            </div>
        </figure>
    )
}