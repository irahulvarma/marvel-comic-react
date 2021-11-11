import React from 'react';

class RegisterSuccess extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		return (
			<div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
				<h3 className="text-success">Successfully Registered</h3>
				<center><i className="fa fa-check text-success" aria-hidden="true"></i></center>
			</div>
		);
	}
}

export default RegisterSuccess;