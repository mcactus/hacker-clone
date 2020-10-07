import React, {useState, useEffect} from 'react';
import RequestProvider from '../API/RequestProvider';
import { Link } from 'react-router-dom';

const ArticlesPage = () => {
  const [ articles, setArticles ] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
        const { hits } = await RequestProvider.getHomePage();
        setArticles(hits);
    }

    getArticles();
  }, []);

  return (
      <div className='row row-cols-1 row-cols-lg-3 g-4'>
        {articles.map(({ objectID, url, title, author, points, num_comments }) => {
          const articleSource = url ? (
            <a
              href={url}
              target='_blank'
              className='d-inline mr-2 link-light text-uppercase'
              title='Read on source'>
              Read on source
            </a>) : '';
          return (
            <div className='col' key={objectID}>
              <div className='card bg-dark text-light h-100'>
                <div className='card-header'> {author} </div>
                <div className='card-body'>
                  <h3 className='card-text'> {title} </h3>
                </div>
                <div className='card-footer'>
                  <div className='d-inline mr-2' title='Upvotes'>
                    Upvotes ({points})
                  </div>
                  <Link
                    to={`/article/${objectID}`}
                    className='d-inline mr-2 link-light history-link'
                    title='Comments'>
                    Comments ({num_comments})
                  </Link>
                  {articleSource}
                </div>
              </div>
            </div>
          );
        })}
      </div>
  );
}

export default ArticlesPage;