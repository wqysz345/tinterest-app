import {Typography} from "../../../atoms/Typography";
import {IconButton} from "../../../atoms/Buttons/IconButton";
import {Eye, Heart, MessageSquare} from "lucide-react";
import {IAuthor} from "../../../../types";

export const ArticleFooter = ({ author }: { author: IAuthor }) => {
    return (
        <section className="article__footer p-6 flex justify-between items-center">
            <div className={'flex items-center space-x-2'}>
                <img src={author.avatar} alt="Profile"
                     className="w-8 h-8 rounded-full"/>
                <Typography variant={'small'} className={'!text-slate-500'}>{author.short_url}</Typography>
            </div>
            <div className="flex items-center space-x-6">
                <IconButton Icon={Heart}/>
                <IconButton Icon={MessageSquare}/>
                <IconButton Icon={Eye}/>
            </div>
        </section>
    )
}