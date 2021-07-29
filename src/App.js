import React from 'react';

import './App.css';
import amazon from './images/amazon_img.jpeg';
import productPrev from './Components/productPrev';
import productDeatils from './Components/productDetails';

function App() {

	return (
		<div className="App">
			<nav>
				<img src={amazon} alt="" id="amazon" />
			</nav>

			<div id="prouct_info">
				
				<div className='productPreview'>
					<productPrev />
				</div>

				<div id="details">
					<productDeatils/>
				</div>

			</div>

		</div>
	);
}

export default App;
