import React from 'react';
import ReactDom from 'react-dom';
import {Route, Switch,Redirect, Link, withRouter} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loginpage from '../pages/Loginpage';
import Registerpage from '../pages/Registerpage';
import Homepage from '../pages/Homepage';

class Main extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
		<>
			<Navbar />
			<Switch>
	           <Route path="/login" component={Loginpage} />
	           <Route path="/register" component={Registerpage} />
	           <Route path="/" component={Homepage} />
	       </Switch>
	       <Footer />
	    </>
		);
	}
}

export default Main;