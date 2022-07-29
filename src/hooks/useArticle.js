import { useEffect, useReducer } from "react";
import { articleReducer } from "../reducers/articleReducer";

const init = () => {
    return JSON.parse(localStorage.getItem('articles')) || [];
}

const useArticle = () => {
  
    const [articles, dispatch] = useReducer(articleReducer, [], init);

    useEffect(()=>{

        localStorage.setItem('articles', JSON.stringify(articles));

    },[articles]);

    const handleNewArticle = (article) =>{

        dispatch({
            type: '[Article] Add Article',
            payload:article
        });
    }

    const handleDeleteArticle = (id) => {
        dispatch({
            type:'[Article] Remove Article',
            payload: id
        });
    }

    const handleToggleArticle = (id) => {
        dispatch({
            type:'[Article] Toggle Article',
            payload: id
        });
    }

    return {
        articles,
        articlesCount: articles.length,
        articlesPending: articles.filter(art => !art.existe).length,
        handleToggleArticle,
        handleDeleteArticle,
        handleNewArticle,
        totalPrecio: articles.filter(art => !art.existe).map(art => art.precio).reduce((prev, curr) => prev + curr, 0)
    }

}

export default useArticle;