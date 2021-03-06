import React from 'react';
import { firebaseApp } from '../../firebase';
import { Link } from 'react-router-dom';
import '../../assets/css/signin.css';

export default class SignUp extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: '',
        error: {
          message: ''
        }
      }
  }

  signUp() {
    console.log('this state: ', this.state);
    const { email, password } = this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
    .catch(error => {
      this.setState({ error })
    })
  }

  render() {
    return(
      <div className="form-signin">
        <h1 className="form-signin-heading">Sign Up</h1>
        <hr className="colorgraph" />
        {this.state.error.message &&
          <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <strong>Oh snap!</strong> {this.state.error.message}
          </div>
        }
        <div className="form-group">
          <input
            className="form-control pad10"
            type="text"
            placeholder="Email Address:"
            autoFocus="true"
            onChange={(event) => this.setState({email: event.target.value})}
          />
          <input
            className="form-control pad10"
            type="password"
            placeholder="Password:"
            onChange={(event) => this.setState({password: event.target.value})}
          />
          <br/>
          <button
            className="btn btn-md btn-primary pad10 btn-block"
            type="button"
            onClick={() => this.signUp()}
            >Register Now
          </button>
          <Link to="/signin">Already Registered?</Link>
        </div>
      </div>
    )
  }
}
