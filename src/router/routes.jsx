import React from 'react';
import SignUp from '../components/pages/SignUp';
import SignIn from '../components/pages/SignIn';
import Home from '../components/pages/Home';
import About from '../components/pages/About';
import Battle from '../components/pages/Battle';
import NotFound from '../components/pages/NotFound';
import { Router, Route, Switch } from 'react-router-dom'; //BrowserRouter as
import { firebaseApp } from '../firebase';
import history from '../history';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { logUser } from '../actions/user';
import reducer from '../reducers/user';

const store = createStore(reducer);

// Checking if User logged in or not
firebaseApp.auth().onAuthStateChanged(user => {
  if(user) {
    // console.log('User has signed up or in', user);
		const { email } = user;
		store.dispatch(logUser(email));
    history.push('/');
  }else {
    console.log('User signed out or needs to login.');
		history.replace('/signin');
  }
})

export default class Routes extends React.Component {
	render() {
		return(
			<Provider store={store}>
				<Router history={history}>
					<Switch>
		        <Route exact path='/' component={Home}/>
						<Route exact path='/signup' component={SignUp}/>
						<Route exact path='/signin' component={SignIn}/>
						<Route exact path='/battle' component={Battle}/>
						<Route exact path='/about' component={About}/>

					  {/* when none of the above match, <NoMatch> will be rendered */}
					  <Route component={NotFound}/>
				  </Switch>
			  </Router>
			</Provider>
		)
	}

}
