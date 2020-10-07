import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RequestProvider from "../API/RequestProvider";

const ArticleComments = () => {
  const { id } = useParams(),
    [ article, setArticle ] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const articleData = await RequestProvider.getArticlePage(id);
      setArticle(articleData);
    }

    getArticles();
  }, []);

  return (
    <div>
      <div className="row">
        <article className="col-12 article">
          {/*<h2> {{title}} </h2>*/}
          {/*{{{text}}}*/}
          <div className="article-footer">
            <div className="d-inline mr-2" data-toggle="tooltip" title="Upvotes">
              {/*<i className="far fa-thumbs-up"></i> {{points}}*/}
            </div>
            {/*{articleSource}*/}
          </div>
        </article>
      </div>
      <div className="row mt-5 border-top">
        <div className="col-12 comments__wrapper">
        {/*{{>child}}*/}
        {/*{{! Рекурсивный вызов шаблона с комментами. Создаём вложенную структуру (лесенку комментов) }}*/}
        </div>
      </div>
    </div>
  );
}

export default ArticleComments;