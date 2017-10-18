import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import Signup from './../ui/Signup';
import Link from './../ui/Link';
import NotFound from './../ui/NotFound';
import Login from './../ui/Login';
import createBrowserHistory from 'history/createBrowserHistory'

const browserHistory = createBrowserHistory();

const unauthenticatedPages = ['/','signup'];
const authenticatedPages = ['/links'];
//window.browserHistory = browserHistory;
const onEnterPublicPage = () => {
  if(Meteor.userId()){
    //browserHistory.push('/links');
    console.log("df")
  }
};
const onEnterPrivatePage = () => {
  if(!Meteor.userId()){
  //  browserHistory.push('/');
    console.log("df")
  }
};

export const onAuthChange= (isAuthenticated) => {
  console.log("sdgd")
  const pathName = browserHistory.location.pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathName);
  const isAuthenticatedPage = authenticatedPages.includes(pathName);

  // if(isUnauthenticatedPage && isAuthenticated){
  //   console.log("Redirecting")
  // //  browserHistory.push("/links");
  //   //  this.props.history.push('/links');
  // }
  // else if(isAuthenticatedPage && !isAuthenticated){
  //   browserHistory.push("/");
  // }
  //console.log(browserHistory.location.pathname);
  //console.log('isAuthenticated',isAuthenticated);
}

export const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/signup" exact component={Signup}  />
    <Route path="/links" exact component={Link} />
    <Route path="/" exact component={Login} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);
