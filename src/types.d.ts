export interface IAuthor {
    avatar: string;
    short_url: string;
}

export interface IUser {
    thumbnail: string,
    name: string,
    short_url: string
    followers: int
    following: int
    avatar: string
}

export interface ITeam {
    name: string;
    description: string;
    members: number;
}

export interface IArticle {
    preview: string;
    title: string;
    body: string;
    author: IAuthor;
}