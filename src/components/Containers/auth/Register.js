import React, { Component } from "react";
import { Link } from "react-router-dom";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "../../UI/Button";

class Register extends Component {
  state = {
    email: "",
    password: ""
  };

  handleClick = e => {
    e.preventDefault();
    console.log("Button Clicked");
    console.log(this.state.email);
    console.log(this.state.password);
  };

  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="column">
        <h2>
          Register to Adopt-A-Pet to begin Adopting, Earning Tokens, Playing
          Games, and More!
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

export default Register;
