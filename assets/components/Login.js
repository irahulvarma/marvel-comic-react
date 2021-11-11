import React from 'react';
import ReactDom from 'react-dom';
import {Route, Switch,Redirect, Link, withRouter} from 'react-router-dom';


class Login extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<Link to="login"><button type="button" className="btn btn-success">Login</button></Link>				
			</>
		)
		
	}
}

export default Login;