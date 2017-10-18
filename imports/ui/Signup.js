import React from 'react';
import { Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base'

export default class Signup extends React.Component {
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

  if(password.length < 9){
      return this.setState({error: 'SHould be more than 8'})
  }

  Accounts.createUser({email,password}, (err) => {
    if( err) {
      this.setState({error:err.reason});
    }
    else{
        this.setState({error: ''});
    }

  });
  /*

  this.setState({
    error: 'Smth went'
  });*/
}

  render(){
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p> }
        <form onSubmit={this.onSubmit.bind(this)} noValidate>
          <input type="email" name="email" ref="email" placeholder="email"/>
        <input type="password" ref="password" name="password" placeholder="password"/>
        <button > Submit </button>
        </form>
        <Link to="/"> Already have an account </Link>
      </div>
    )
  }

}
