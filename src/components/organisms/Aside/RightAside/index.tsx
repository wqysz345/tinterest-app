import {ChevronRight} from "lucide-react";

export const RightAsideOrganism = () => {
    return (
        <figure className="w-full bg-white shadow-xl rounded-lg p-4 space-y-5">
            <h2 className={'text-slate-500 text-xl'}>Подписки</h2>
            <div className="flex flex-col space-y-3 items-start">
                <a href="#!"
                   className={'text-lg w-full flex items-center justify-between text-blue-500 transition-all duration-300 hover:text-blue-500'}>
                                <span className="flex items-center space-x-4">
                                    <img src="https://avatars.githubusercontent.com/u/583231?v=4" alt="Profile"
                                         className="w-8 h-8 rounded-full"/>
                                    <span>John Doe</span>
                                </span>
                    <ChevronRight/>
                </a>
                <a href="#!"
                   className={'text-lg w-full flex items-center justify-between text-slate-400 transition-all duration-300 hover:text-blue-500'}>
                                <span className="flex items-center space-x-4">
                                    <img src="https://avatars.githubusercontent.com/u/583231?v=4" alt="Profile"
                                         className="w-8 h-8 rounded-full"/>
                                    <span>John Doe</span>
                                </span>
                    <ChevronRight/>
                </a>
                <a href="#!"
                   className={'text-lg w-full flex items-center justify-between text-slate-400 transition-all duration-300 hover:text-blue-500'}>
                                <span className="flex items-center space-x-4">
                                    <img src="https://avatars.githubusercontent.com/u/583231?v=4" alt="Profile"
                                         className="w-8 h-8 rounded-full"/>
                                    <span>John Doe</span>
                                </span>
                    <ChevronRight/>
                </a>
                <a href="#!"
                   className={'text-lg w-full flex items-center justify-between text-slate-400 transition-all duration-300 hover:text-blue-500'}>
                                <span className="flex items-center space-x-4">
                                    <img src="https://avatars.githubusercontent.com/u/583231?v=4" alt="Profile"
                                         className="w-8 h-8 rounded-full"/>
                                    <span>John Doe</span>
                                </span>
                    <ChevronRight/>
                </a>
            </div>
        </figure>
    )
}