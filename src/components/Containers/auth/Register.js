import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "../../UI/Button";

import * as actions from "../../../store/actions/index";

class Register extends Component {
  state = {
    email: "",
    emailValid: false,
    emailTouched: false,
    password: "",
    passwordValid: false,
    passwordTouched: false
  };

  checkValidity = () => {};

  handleClick = e => {
    e.preventDefault();
    console.log("Button Clicked");
    console.log(this.state.email);
    console.log(this.state.password);
    this.props.onSignUp(this.state.email, this.state.password);
    console.log(this.props.result);
  };
  currentUser;

  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    });
  };

  render() {
    const { email, password } = this.state;
    var message = this.props.message ? this.props.message : null;

    let authRedirect = null;
    if (this.props.currentUser) {
      authRedirect = <Redirect to="/my-pets" />;
    }

    return (
      <div className="column">
        {authRedirect}
        <h2>
          Register to Adopt-A-Pet to begin Adopting, Earning Tokens, Playing
          Games, and More!
        </h2>
        <h1>{message}</h1>
        <form className="ui large form">
          <div className="ui stacked segment">
            <div className="field">
              <InputLabel htmlFor="email">Email</InputLabel>
              <FormControl className="inputField">
                <Input
                  defaultValue="Email"
                  id="email"
                  value={email}
                  onChange={this.handleChange("email")}
                />
              </FormControl>
            </div>
            <div className="field">
              <FormControl>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  defaultValue="Password"
                  id="password"
                  value={password}
                  onChange={this.handleChange("password")}
                />
              </FormControl>
            </div>
            <Button btnClass="ui primary button" clicked={this.handleClick}>
              Register
            </Button>
          </div>
          <div className="ui error message">Message</div>
        </form>
        <div className="ui message">
          Already have an account? <Link to="/login">Log In</Link>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSignUp: (email, password) => dispatch(actions.auth(email, password))
  };
};

const mapStateToProps = state => {
  return {
    message: state.auth.message,
    errorMsg: state.auth.error,
    result: state.auth.result,
    currentUser: state.auth.currentUser
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
