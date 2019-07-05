import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "../../UI/Button";
import Modal from "../../UI/Modal/Modal";
import Spinner from "../../UI/Spinner/Spinner";

import * as actions from "../../../store/actions/index";

class Login extends Component {
  componentDidMount() {
    this.props.checkAuthState();
  }

  state = {
    email: "",
    password: ""
  };

  handleClick = e => {
    e.preventDefault();
    this.props.onLogIn(this.state.email, this.state.password);
    console.log(this.props.errorMessage);
  };

  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    });
  };

  render() {
    const { email, password } = this.state;

    let showError = {
      display: "block"
    };

    return (
      <div className="column">
        <Modal show={this.props.loading}>
          <Spinner />
        </Modal>
        <h2>
          Log into Adopt-A-Pet to Access Your Pets, Adopt, Earn Tokens, and
          More!
        </h2>
        <form className="ui large form">
          <div className="ui stacked segment">
            <div className="field">
              <FormControl className="inputField">
                <InputLabel htmlFor="email">Email</InputLabel>
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
              Login
            </Button>
          </div>
          <div
            className="ui error message"
            style={this.props.errorMessage ? showError : null}
          >
            {this.props.errorMessage ? this.props.errorMessage : null}
          </div>
        </form>
        <div className="ui message">
          New to us? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogIn: (email, password) => dispatch(actions.signIn(email, password)),
    checkAuthState: () => dispatch(actions.checkAuthState())
  };
};

const mapStateToProps = state => {
  return {
    errorMessage: state.auth.errorMessage,
    currentUser: state.auth.currentUser,
    loading: state.auth.loading
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
