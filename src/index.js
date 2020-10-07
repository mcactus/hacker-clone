import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'mdb-ui-kit/css/mdb.min.css';

import App from './components/App';

ReactDOM.render((
  <section className='app'>
    <Router>
      <App />
    </Router>
  </section>
), document.getElementById('root'));