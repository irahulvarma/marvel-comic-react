import React from 'react';

class Loginpage extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			fields : {},
			errors : {}
		}

		this.handleChange = this.handleChange.bind(this);
		this.onLogin = this.onLogin.bind(this);
		this.handleValidation = this.handleValidation.bind(this);

	}

	handleChange(e) {
		this.setState({
			fields : {
				...this.state.fields,
				[e.target.name] : e.target.value
			}
		});
		console.log(this.state.fields);
	}

	onLogin(e) {
		e.preventDefault();
		let formValid = this.handleValidation();

		if (formValid) {

		}		
	}

	handleValidation() {
		let fields = this.state.fields;
		let isFormValid = true;
		let errors = {};

		if (!fields['email']) {
			isFormValid = false;
			errors['email'] = 'This is required';
		}

		if (!fields['password']) {
			isFormValid = false;
			errors['password'] = 'This is required';
		}

		this.setState({
			errors : errors
		});

		return isFormValid;

	}

	componentDidMount() {
		document.title = 'Login';
	}

	render() {
		return (
		  <section className="vh-120" style={{backgroundColor: '#508bfc'}}>
			  <div className="container py-5 h-100">
			    <div className="row d-flex justify-content-center align-items-center h-100">
			      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
			        <div className="card shadow-2-strong" style={{borderRadius: '1rem'}}>
			          <div className="card-body p-5 text-center">

			            <h3 className="mb-5">Sign in</h3>
			            <form onSubmit={this.onLogin}>
				            <div className="form-outline mb-4">
				              <input type="text" id="typeEmailX" className="form-control form-control-lg" 
				              name='email' onChange={this.handleChange} />
				              <label className="form-label" htmlFor="typeEmailX">Email</label>
				            </div>
				            { this.state.errors['email'] && <small className='text-danger'>{this.state.errors['email']}</small> }

				            <div className="form-outline mb-4">
				              <input type="password" id="typePasswordX" className="form-control form-control-lg" 
				              name='password' onChange={this.handleChange} />
				              <label className="form-label" htmlFor="typePasswordX">Password</label>
				            </div>
				            { this.state.errors['password'] && <small className='text-danger'>{this.state.errors['password']}</small> }
				        
				            <div className="form-check d-flex justify-content-start mb-4">
				              <input
				                className="form-check-input"
				                type="checkbox"
				                value=""
				                id="form1Example3"
				              />
				              <label className="form-check-label" htmlFor="form1Example3"> Remember password </label>
				            </div>

				            <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>
			            </form>

			            <hr className="my-4"></hr>

			            <button className="btn btn-lg btn-block btn-primary" style={{backgroundColor: '#dd4b39'}} type="submit"><i className="fab fa-google me-2"></i> Sign in with google</button>
			            <button className="btn btn-lg btn-block btn-primary mb-2" style={{backgroundColor: '#3b5998'}} type="submit"><i className="fab fa-facebook-f me-2"></i>Sign in with facebook</button>

			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</section>
		);
	}
}

export default Loginpage;