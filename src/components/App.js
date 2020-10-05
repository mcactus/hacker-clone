import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Header from './Header';
import ArticlesPage from './ArticlesPage';
import ArticleComments from './ArticleComments';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={ArticlesPage} />
        <Route path='/article/:id' component={ArticleComments} />
      </Switch>
    </div>
  );
}

export default App;