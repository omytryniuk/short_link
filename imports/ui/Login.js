import React from 'react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }

  onSubmit(e){
    e.preventDefault();
    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    Meteor.loginWithPassword({email}, password, (err)=>{
      if(err){
        this.setState({error:'Unable to login. Please check password'});
      }else{
        this.setState({error:''});
      }
    });
  }

  render(){
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p> }
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="email" name="email" ref="email" placeholder="email"/>
          <input type="password" ref="password" name="password" placeholder="password"/>
        <button > Login </button>
        </form>
        <p>Please <Link to="/links">login</Link> here</p>
        <Link to="/signup"> Create a new </Link>
      </div>
    )
  }

}
