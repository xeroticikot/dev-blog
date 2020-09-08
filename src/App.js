import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/common/Header';
import HomePage from './components/pages/HomePage';
import NotFoundPage from './components/pages/NotFoundPage';
import SinglePost from './components/posts/SinglePost';

const App = () => (
  <Fragment>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' component={HomePage} exact={true} />
        <Route path='/post/:id' component={SinglePost} exact={true} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  </Fragment>
);

export default App;
