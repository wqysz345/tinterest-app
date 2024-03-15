import {Typography} from "../../../atoms/Typography";

export const ArticleBody = ({title, body}: { title: string, body: string }) => {
    return (
        <section className="article__body p-6 flex flex-col items-start space-y-4">
            <Typography variant={'h3'}>{title}</Typography>
            <Typography variant={'paragraph'} className={'!text-slate-700'}>
                {body}
            </Typography>
        </section>
    )
}