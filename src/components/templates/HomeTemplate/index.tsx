import {HeaderOrganism} from "../../organisms/Header";
import {ArticleOrganism} from "../../organisms/Article";

import {faker} from "@faker-js/faker";
import {IArticle} from "../../../types";
import {CategoriesOrganism} from "../../organisms/Categories";
import {LeftAsideOrganism} from "../../organisms/Aside/LeftAside";
import {RightAsideOrganism} from "../../organisms/Aside/RightAside";

export const HomeTemplate = () => {

    // Fake data for articles
    const articles: IArticle[] = [];

    for (let i = 0; i < 10; i++) {
        const article: IArticle = {
            preview: faker.image.url(),
            title: faker.lorem.words(),
            body: faker.lorem.paragraphs(),
            author: {
                avatar: faker.image.avatar(),
                short_url: '@' + faker.person.firstName().toLowerCase(),
            }
        }

        articles.push(article);
    }

    return (
        <>
            <HeaderOrganism/>

            <div className="grid grid-cols-12 max-w-screen-xl mx-auto">
                <div className="col-span-3">
                    <LeftAsideOrganism />
                </div>
                <div className="col-span-6 max-w-xl place-self-center flex flex-col space-y-5">
                    <div className="w-full flex items-center justify-between">
                        <CategoriesOrganism />
                    </div>
                    <div className="w-full flex flex-col space-y-8">
                        {articles.map((article, index) => (
                            <ArticleOrganism key={index} article={article}/>
                        ))}
                    </div>
                </div>
                <div className="col-span-3">
                    <RightAsideOrganism />
                </div>
            </div>
        </>
    )
}