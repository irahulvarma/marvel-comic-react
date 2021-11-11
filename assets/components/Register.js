import React from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';

class Register extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<>
				<Link to='register'>
					<button type="button" className="btn btn-success" >Register</button>
				</Link>
			</>
		);
	}
}

export default Register;