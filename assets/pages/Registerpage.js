import React from 'react';

import UserAPI from '../API/User';

import RegisterSuccess from '../components/RegisterSuccess';

class Registerpage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			fields : {},
			errors : {},
			formSubmitted : false
		}

		this.onRegister = this.onRegister.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleChecked = this.handleChecked.bind(this);
		this.handleValidation = this.handleValidation.bind(this);
	}

	onRegister(e) {
		e.preventDefault();
		let submitForm = this.handleValidation();

		if (submitForm) {
			UserAPI.create(this.state.fields).then((response) => {				
				this.setState({
					...response.data
				});				
			});
		}
	}

	handleChange(e) {
		this.setState({
			fields : {
				...this.state.fields,
				[e.target.name] : e.target.value
			}
		});	
	}

	handleChecked(e) {
		this.setState({
			fields : {
				...this.state.fields,
				[e.target.name] : e.target.checked
			}
		});		
	}

	handleValidation() {
		let fields = this.state.fields;
		let isFormValid = true;
		let error = {};

		if (!fields['username']) {
			isFormValid = false;
			error['username'] = 'This is required';
		}

		if (!fields['email']) {
			isFormValid = false;
			error['email'] = 'This is required';	
		}

		if (!fields['password']) {
			isFormValid = false;
			error['password'] = 'This is required';	
		}

		if (!fields['confirm_password']) {
			isFormValid = false;
			error['confirm_password'] = 'This is required';	
		}

		if (!fields['agree']) {
			isFormValid = false;
			error['agree'] = 'This is required';	
		}

		this.setState({
			errors  : error
		});

		return isFormValid;
	}

	componentDidMount() {
		 document.title = 'Registration';
	}

	render() {
		return (
		  <section className="vh-100" style={{backgroundColor: '#eee'}}>		  
			  <div className="container h-100">
			    <div className="row d-flex justify-content-center align-items-center h-100">
			      <div className="col-lg-12 col-xl-11">
			        <div className="card text-black" style={{borderRadius: '25px'}}>
			          <div className="card-body p-md-5">
			            <div className="row justify-content-center">
			            { !this.state.formSubmitted ? (
			              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

			                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

			                <form className="mx-1 mx-md-4" onSubmit={this.onRegister}>

			                  <div className="d-flex flex-row align-items-center mb-2">
			                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
			                    <div className="form-outline flex-fill mb-0">
			                      <input type="text" id="form3Example1c" className="form-control" name="username" 
			                      onChange={this.handleChange} />
			                      <label className="form-label" htmlFor="form3Example1c">Your Username</label>
			                    </div>			                    
			                  </div>
			                  { this.state.errors['username'] && <small className='text-danger'>{this.state.errors['username']}</small> }

			                  <div className="d-flex flex-row align-items-center mb-2">
			                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
			                    <div className="form-outline flex-fill mb-0">
			                      <input type="email" id="form3Example3c" className="form-control" name="email"
			                      onChange={this.handleChange} />
			                      <label className="form-label" htmlFor="form3Example3c">Your Email</label>
			                    </div>			                    
			                  </div>
			                  { this.state.errors['email'] && <small className='text-danger'>{this.state.errors['email']}</small> }

			                  <div className="d-flex flex-row align-items-center mb-2">
			                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
			                    <div className="form-outline flex-fill mb-0">
			                      <input type="password" id="form3Example4c" className="form-control" name="password"
			                      onChange={this.handleChange} />
			                      <label className="form-label" htmlFor="form3Example4c">Password</label>
			                    </div>			                    
			                  </div>
			                  { this.state.errors['password'] && <small className='text-danger'>{this.state.errors['password']}</small> }

			                  <div className="d-flex flex-row align-items-center mb-2">
			                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
			                    <div className="form-outline flex-fill mb-0">
			                      <input type="password" id="form3Example4cd" className="form-control" name="confirm_password"
			                      onChange={this.handleChange} />
			                      <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
			                    </div>			                    
			                  </div>
			                  { this.state.errors['confirm_password'] && <small className='text-danger'>{this.state.errors['confirm_password']}</small> }

			                  <div className="form-check d-flex justify-content-center mb-3">
			                    <input
			                      className="form-check-input me-2"
			                      type="checkbox"			                     
			                      id="form2Example3c"
			                      name="agree"
			                      onChange={this.handleChecked}
			                    />
			                    <label className="form-check-label" htmlFor="form2Example3">
			                      I agree all statements in <a href="#!">Terms of service</a>
			                    </label>			                    
			                  </div>
			                  { this.state.errors['agree'] && <small className='text-danger'>{this.state.errors['agree']}</small> }

			                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
			                    <button type="submit" className="btn btn-primary btn-lg">Register</button>
			                  </div>

			                </form>

			              </div>
			          	) : <RegisterSuccess />}
			              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

			                <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/draw1.png" className="img-fluid" alt="Sample image"></img>

			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</section>
		);
	}
}

export default Registerpage;