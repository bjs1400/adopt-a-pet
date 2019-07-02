import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "../../UI/Button";
import Modal from "../../UI/Modal/Modal";
import Spinner from "../../UI/Spinner/Spinner";

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
    this.props.onSignUp(this.state.email, this.state.password);
  };

  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    });
  };

  render() {
    const { email, password } = this.state;

    let authRedirect = null;
    if (this.props.currentUser) {
      authRedirect = <Redirect to="/home" />;
    }

    return (
      <div className="column">
        <Modal show={this.props.loading}>
          <Spinner />
        </Modal>
        {authRedirect}
        <h2>
          Register to Adopt-A-Pet to begin Adopting, Earning Tokens, Playing
          Games, and More!
        </h2>
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
    currentUser: state.auth.currentUser != null,
    loading: state.auth.loading
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
