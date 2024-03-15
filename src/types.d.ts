export export interface IAuthor {
    avatar: string;
    short_url: string;
}

export default interface IUser {
    thumbnail: string,
    name: string,
    short_url: string
    followers: int
    following: int
    avatar: string
}

export interface IArticle {
    preview: string;
    title: string;
    body: string;
    author: IAuthor;
}