import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import ArticlesPage from './ArticlesPage';
import ArticleComments from './ArticleComments';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Router>
        <Switch>
          <main className='container'>
            <Route exact path='/'>
              <ArticlesPage />
            </Route>
            <Route path='/article/:id'>
              <ArticleComments />
            </Route>
          </main>
        </Switch>
      </Router>
    </div>
  );
}

export default App;