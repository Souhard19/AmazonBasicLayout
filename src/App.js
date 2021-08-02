import React, { Component } from 'react';

import './App.css';
import amazon from './images/amazon_img.jpeg';
import productPrev from './Components/productPrev';
import productDeatils from './Components/productDetails';



function App(){

		return (
			<div className="App">
				<nav>
					<img src={amazon} alt="" id="amazon" />
				</nav>

				<div id="prouct_info">

					<productPrev />

					<productDeatils />

				</div>
			</div>
		);
	
}

export default App;
