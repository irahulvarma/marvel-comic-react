import React from 'react';
import ReactDom from 'react-dom';


class Footer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<footer className="page-footer font-small blue">
			  <div className="footer-copyright text-center py-3">© 
			  {(new Date().getFullYear())} Copyright:
			    <a href="https://mdbootstrap.com/"> ComixBlock.com</a>
			  </div>
			</footer>
		)
		
	}
}

export default Footer;