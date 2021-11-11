import React from 'react';

import Loader from 'react-loader-spinner';

//import ComicGrid
import ComicGrid from './ComicGrid';

class ContainerGrid extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			hasError : false,
			isLoading : this.props.isLoading,
			data : this.props.comics
		};		
	}	

	componentDidUpdate(prevProps) {

		if (this.props.comics != prevProps.comics) {
			this.setState({
				data : this.props.comics,
				isLoading : this.props.isLoading
			});
		}
	}

	

	render() {

		if (this.state.hasError) {
			return <div>Something went wrong</div>;
		}

		if (this.state.isLoading) {
			return (
			<center className="m-2">
		      <Loader
		        type="ThreeDots"
		        color="#00BFFF"
		        height={100}
		        width={100}
		      />
		    </center>
		    );
		}

		
		return (
			<>
			{(this.state.data.data) && this.state.data.data.results.map(comic => (
				<ComicGrid key={comic.id} comic={comic} />
				
			))}
			</>
		)	
		
		
	}
}

export default ContainerGrid;