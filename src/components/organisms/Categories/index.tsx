import {ChevronLeft, ChevronRight, Locate} from "lucide-react";
import {IconButton} from "../../atoms/Buttons/IconButton";

export const CategoriesOrganism = () => {
    return (
        <>
            <IconButton className={'!bg-slate-200 !text-slate-800'} Icon={ChevronLeft} />
            <div className="flex items-center space-x-2 mx-auto">
                <IconButton Icon={Locate} active>Категория</IconButton>
                <IconButton Icon={Locate}>Категория</IconButton>
                <IconButton Icon={Locate}>Категория</IconButton>
                <IconButton Icon={Locate}>Категория</IconButton>
            </div>
            <IconButton className={'!bg-slate-200 !text-slate-800'} Icon={ChevronRight} />
        </>
    )
}