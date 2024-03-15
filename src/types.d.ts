export export interface IAuthor {
    avatar: string;
    short_url: string;
}

export interface IArticle {
    preview: string;
    title: string;
    body: string;
    author: IAuthor;
}