import React, {Component} from "react";
import {connect} from "react-redux";

import {Link, Redirect} from "react-router-dom";

import {auth} from "../actions";

class Login extends Component {

  state = {
    username: "",
    password: "",
    email: "",
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.register(this.state.username, this.state.password, this.state.email);
  }

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />
    }
    return (
      <div>
      <div className="large-3 large-centered columns">
      <div className="login-box">
      <h1>Trip Pin Points !</h1>
      {this.props.errors.length > 0 && (
            <ul>
              {this.props.errors.map(error => (
                <li className="red" key={error.field}>{error.message}</li>
              ))}
            </ul>
          )}
      <div className="row">
      <div className="large-12 columns">
        <form onSubmit={this.onSubmit}>
           <div className="row">
             <div className="large-12 columns">
                 <input type="text" name="username" placeholder="Username" onChange={e => this.setState({username: e.target.value})} />
             </div>
           </div>

            <div className="row">
             <div className="large-12 columns">
                 <input type="email" name="email" placeholder="Email" onChange={e => this.setState({email: e.target.value})}/>
             </div>
          </div>

          <div className="row">
             <div className="large-12 columns">
                 <input type="password" name="password" placeholder="Password" onChange={e => this.setState({password: e.target.value})}/>
             </div>
          </div>
          <div className="row">
            <div className="large-12 large-centered columns">
              <input type="submit" className="button expand" value="Register"/>
            </div>
          </div>
          Already have an account? <Link to="/login">Log in</Link>

        </form>
      </div>
    </div>
    </div>
    </div>
    </div>
    )
  }
}

const mapStateToProps = state => {
  let errors = [];
  if (state.auth.errors) {
    errors = Object.keys(state.auth.errors).map(field => {
      return {field, message: state.auth.errors[field]};
    });
  }
  return {
    errors,
    isAuthenticated: state.auth.isAuthenticated
  };
}

const mapDispatchToProps = dispatch => {
  return {
    register: (username, password, email) => dispatch(auth.register(username, password, email)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);