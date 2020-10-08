import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import RequestProvider from '../API/RequestProvider';
import SourceLink from './utils/SourceLink';

const ArticleComments = () => {
  const { id } = useParams(), // REMEMBER: getting article's id from router
    [ article, setArticle ] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const articleData = await RequestProvider.getArticlePage(id);
      setArticle(articleData);
    }

    getArticles();
  }, []);

  const { title, points, text, url, children } = article;

  return (
    <div>
      <div className="row">
        <article className="col-12 article">
          <h2> { title } </h2>
          {!!text ? text : ''}
          <div className="article-footer">
            <div className="d-inline mr-2" data-toggle="tooltip" title="Upvotes">
              Upvotes ({points})
            </div>
            <SourceLink url={url} />
          </div>
        </article>
      </div>
      <div className="row mt-5 border-top">
        <div className="col-12 comments__wrapper">
        { children && children.map(elem => <Comment data={elem} key={elem.id} />) }
        {/*{{! Рекурсивный вызов шаблона с комментами. Создаём вложенную структуру (лесенку комментов) }}*/}
        </div>
      </div>
    </div>
  );
}

const Comment = props => {
  const { author, created_at, text, children } = props.data;

  return (
    <div className="comments__item">
      <div className="comments__header">
        <b className="author"> {author} </b>
        <span className="date"> {created_at} </span>
      </div>
      <div className="comments__body">
        <div className="comments__text" dangerouslySetInnerHTML={{__html: text}} />

        {children && children.map(elem => <Comment data={elem} key={elem.id} />)}
      </div>
    </div>
  );
}

export default ArticleComments;