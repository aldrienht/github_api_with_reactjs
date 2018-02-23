import React from 'react';
import { firebaseApp } from '../../firebase';
import { Link } from 'react-router-dom';
import '../../assets/css/signin.css';

export default class SignIn extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: '',
        error_message: '',
        error: {
          message: ''
        }
      }
  }

  signIn() {
    console.log('this state: ', this.state);
    const { email, password } = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
    .catch(error => {
      this.setState({ error })
    })
  }

  render() {
    return(
      <div className="form-signin">
        <h1 className="form-signin-heading">Sign In</h1>
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
            onClick={() => this.signIn()}
            >Sign In
          </button>
          <Link to="/signup">Not yet registered?</Link>
        </div>
      </div>
    )
  }
}
