import React from 'react';
import Login from '../components/Login';
import Register from '../components/Register';
import {Route, Switch,Redirect, Link, withRouter} from 'react-router-dom';

class Navbar extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return(
			<nav className="navbar navbar-light bg-primary p-1">
				<div className="container-fluid">
				  <Link to="/" className="navbar-brand">
						<i className="fas fa-film"></i>
				  </Link>
				  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
				  	<Login />
				  	<Register />
				  </div>
			  	</div>
			</nav>
		);
	}
}

export default Navbar;