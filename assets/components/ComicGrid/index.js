import React from 'react';

class ComicGrid extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			comic : this.props.comic
		};
	}

	render() {

		const comic = this.state.comic;
		
		return (
			<div className="card d-inline-flex col-md-3 col-sm-12 col-sm-12">
			  <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
			  	<center>
			    <img
			      src={comic.thumbnail.path + "/portrait_xlarge" + "." + comic.thumbnail.extension}
			      className="img-fluid"
			    />
			    </center>
			    <a href="#!">
			      <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
			    </a>
			  </div>
			  <div className="card-body">
			    <h5 className="card-title">{comic.title}</h5>				    
			    <a href="#!" className="btn btn-primary">Read More</a>
			  </div>
			</div>

		);
	}
}

export default ComicGrid;