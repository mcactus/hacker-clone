import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import ArticlesPage from './ArticlesPage';
import ArticleComments from './ArticleComments';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Header />
        <main className='container'>
          <Switch>
              <Route exact path='/'>
                <ArticlesPage />
              </Route>
              <Route path='/article/:id'>
                <ArticleComments />
              </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;