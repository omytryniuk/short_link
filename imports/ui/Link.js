import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import { Links } from '../api/links';
import  LinksList from './LinkList';
import { Meteor } from 'meteor/meteor';
//import createBrowserHistory from 'history/createBrowserHistory'

//const browserHistory = createBrowserHistory();

export default class Link extends React.Component {
  onLogout(){
    Accounts.logout();
    this.props.history.push('/');
  }

  onSubmit(e){

    console.log("hkjh")
    e.preventDefault();
    const url = this.refs.url.value.trim();
    console.log("Here")
    if(url){
    //  console.log("Proper")
      Links.insert({url, userId: Meteor.userId()});
      this.refs.url.value = '';
    }
  }

  render(){
    return (
      <div>
      <p> This is a private page </p>
    <button onClick={this.onLogout.bind(this)}>Log out</button>
  <p> Add link </p>
  <LinksList />
  <form >
    <input type="text" ref="url" placeholder="URL" />
  <button onClick={this.onSubmit.bind(this)}> Add Link </button>
  </form>
  </div>
    )
  }
}
