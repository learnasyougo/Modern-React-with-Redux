import React from 'react';
import ReactDOM from 'react-dom';
import promise from 'redux-promise';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PostList from './components/posts/PostList';
import NewPost from './components/posts/NewPost';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <section id="header">
          <h1>Bloggy</h1>
        </section>
        <section id="body">
          <Switch>
            <Route path="/posts/new" component={NewPost} />
            <Route path="/" component={PostList} />
          </Switch>
        </section>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('container'));
