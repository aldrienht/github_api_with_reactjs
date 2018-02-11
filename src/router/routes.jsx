import React from 'react';
import Home from '../components/pages/Home';
import About from '../components/pages/About';
import Battle from '../components/pages/Battle';
import NotFound from '../components/pages/NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default class Routes extends React.Component {
	render() {
		return(
			<Router>
				<Switch>
	        <Route exact path='/' component={Home}/>
					<Route exact path='/battle' component={Battle}/>
					<Route exact path='/about' component={About}/>

				  {/* when none of the above match, <NoMatch> will be rendered */}
				  <Route component={NotFound}/>
			  </Switch>
		  </Router>
		)
	}

}
