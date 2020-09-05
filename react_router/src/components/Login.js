import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
      super(props);
      this.state = {
          username: '',
          password: ''
      }
    }
    onHandleChange = (event) => {
        // console.log(event.target)
        let target = event.target
        let name = target.name
        let value = target.value
        this.setState({
            [name] : value
        })
    }
    onSubmit = (event) => {
        event.preventDefault()
        let { username, password } = this.state
        if (username === 'admin' && password === 'admin') {
            localStorage.setItem('user', JSON.stringify({
                username,
                password
            }))
        }
    }
    render() {
        let { username, password } = this.state
        let logIned = JSON.parse(localStorage.getItem('user'))
        if (logIned !== null) {
            return <Redirect to='/products'/>
        }

    return (
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <legend>Log In</legend>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>UserName</label>
                    <input
                        type="text"
                        name="username"
                        className="form-control"
                        value={username}
                        onChange={this.onHandleChange}
                    />
            <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        value={password}
                        onChange={this.onHandleChange}
                    />
            <button type="submit" className="btn btn-primary">
              Log In
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default Login;
