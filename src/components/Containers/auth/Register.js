import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import withNavbar from "../../hoc/withNavbar";
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
    zindex: null
  };

  componentDidMount() {
    this.props.checkAuthState();
  }

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
    this.setState({
      zindex: 105
    });
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

    let showError = {
      display: "block"
    };

    return (
      <div className="column">
        <Modal zindex={this.state.zindex} show={this.props.loading}>
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
          <div
            className="ui error message"
            style={this.props.errorMessage ? showError : null}
          >
            {this.props.errorMessage}
          </div>
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
    onSignUp: (email, password) => dispatch(actions.auth(email, password)),
    checkAuthState: () => dispatch(actions.checkAuthState())
  };
};

const mapStateToProps = state => {
  return {
    errorMessage: state.auth.errorMessage,
    currentUser: state.auth.currentUser != null,
    loading: state.auth.loading
  };
};

const wrappedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);

export default withNavbar(wrappedComponent);
