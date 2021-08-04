import React, { Component } from 'react';

import './App.css';
import amazon from './images/amazon_img.jpeg';

import data from './Components/component_data'
import ProductPrev from './Components/productPrev';
import ProductDeatils from './Components/productDetails';



class App extends Component {

	state = {
		data: data,
		selectedTile: 0,
		selectedFeature: 0,
	}

	updateTile = (pos) => {
		this.setState({selectedTile: pos})
	}
	updateFeature = (pos) => {
		this.setState({selectedFeature: pos})
	}

	render() {
		return (
			<div className="App">
				<nav>
					<img src={amazon} alt="" id="amazon" />
				</nav>

				<div id="prouct_info">
					<ProductPrev img={this.state.data.colorOptions[this.state.selectedTile].imageUrl} selectedFeature={this.state.selectedFeature} />
					<ProductDeatils data={this.state.data} selectedTile={this.state.selectedTile} selectedFeature={this.state.selectedFeature} 
						updateTile={this.updateTile} updateFeature={this.updateFeature} />
				</div>
			</div>
		);
	}
}

export default App;
