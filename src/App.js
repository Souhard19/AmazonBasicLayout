import React, { Component } from 'react';

import './App.css';
import amazon from './images/amazon_img.jpeg';

import data from './Components/component_data'
import ProductPrev from './Components/productPrev';
import ProductDeatils from './Components/productDetails';



class App extends Component {

	state = {
		data: data,
		slectedTile: 0,
		slectedFeature: 0,
	}

	render() {
		return (
			<div className="App">
				<nav>
					<img src={amazon} alt="" id="amazon" />
				</nav>

				<div id="prouct_info">
					<ProductPrev img={this.state.data.colorOptions[this.state.slectedTile].imageUrl} />
					<ProductDeatils data={this.state.data} />
				</div>
			</div>
		);
	}
}

export default App;
