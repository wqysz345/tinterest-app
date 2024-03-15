import {ArticleHeader} from "../../molecules/Article/Header";
import {ArticleBody} from "../../molecules/Article/Body";
import {ArticleFooter} from "../../molecules/Article/Footer";

import {AnimatePresence, motion} from "framer-motion";
import {IArticle} from "../../../types";


export const ArticleOrganism = ({ article }: { article: IArticle }) => {

    const variants = {
        mount: { opacity: 1, y: 0 },
        unmount: { opacity: 0, y: -10 }
    }

    return (
        <AnimatePresence>
            <motion.article initial={variants.unmount} animate={variants.mount}
                            transition={{type: 'spring', duration: .6, bounce: .5, stiffness: 100 }}
                            className={'shadow-md bg-white rounded-md max-w-xl'}>
                <ArticleHeader url={article.preview}/>
                <ArticleBody
                    title={article.title}
                    body={article.body}
                />
                <ArticleFooter author={article.author}/>
            </motion.article>
        </AnimatePresence>
    )
}