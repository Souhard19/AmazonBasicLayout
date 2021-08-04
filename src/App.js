import React, { Component } from 'react';

import './App.css';
import amazon from './images/amazon_img.jpeg';
import ProductPrev from './Components/productPrev';
import ProductDeatils from './Components/productDetails';



class App extends Component {

	render() {
		return (
			<div className="App">
				<nav>
					<img src={amazon} alt="" id="amazon" />
				</nav>

				<div id="prouct_info">
					<ProductPrev />
					<ProductDeatils />
				</div>
			</div>
		);
	}
}

export default App;
