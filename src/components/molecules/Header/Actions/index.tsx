import {IconButton} from "../../../atoms/Buttons/IconButton";
import {Bell, Moon, Plus} from "lucide-react";

export const HeaderActions = () => {
    return (
        <div className="flex items-center space-x-3">
            <IconButton Icon={Bell} className={'!p-2.5'} iconSize={20} />
            <IconButton Icon={Moon} className={'!p-2.5'} iconSize={20} />
            <IconButton Icon={Plus} className={'!p-2.5'} iconSize={20} />
        </div>
    )
}