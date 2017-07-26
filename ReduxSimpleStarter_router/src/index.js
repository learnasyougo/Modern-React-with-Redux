import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

import { BrowserRouter, Route } from 'react-router-dom';

import PostList from './components/posts/PostList';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <section id="header">
          <h1>Bloggy</h1>
        </section>
        <section id="body">
          <Route path="/" component={PostList} />
        </section>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('container'));
