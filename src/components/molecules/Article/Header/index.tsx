export const ArticleHeader = ({ url }: { url: string }) => {
    return (
        <section className="article__header">
            <img src={url} className={'rounded-t-md'} alt="article-preview"/>
        </section>
    )
}