import { Component } from 'react';

import './App.css';
import amazon from './images/amazon_img.jpeg';
import data from './Components/component_data'
import ProductData from './Components/component_data';


class App extends Component {

	state = {
		ProductData: ProductData,
		selectedTitle: 0,
		selectedFeature: 0,
	}

	time = `${new Date().getHours() > 9 ? new Date().getHours() : '0'+new Date().getHours()}:${new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes()}`;


	checkPrev_Feature = (t, f) => {
		return (
			<div id="image_display_section">
				<img src={data.colorOptions[t].imageUrl} alt="" />
				{
					f ?
					<div className='time_feature'>
						<p>{this.time}</p>
					</div>
					:
					<div className='heartbeat_feature'>
						<i className='fas fa-heartbeat'></i>
						<p>78</p>
					</div>
				}
			</div>
		)
	}


	checktile = (s)=> {

		if (s === 0){
			return (
				<div id='tiles'>
					<img className='selectedTile' src={data.colorOptions[0].imageUrl} alt='' title={data.colorOptions[0].title} onClick={() => this.colorChange(0)} />
					<img src={data.colorOptions[1].imageUrl} alt='' title={data.colorOptions[1].title} onClick={()=> this.colorChange(1)} />
					<img src={data.colorOptions[2].imageUrl} alt='' title={data.colorOptions[2].title} onClick={() => this.colorChange(2)} />
					<img src={data.colorOptions[3].imageUrl} alt='' title={data.colorOptions[3].title} onClick={() => this.colorChange(3)} />
				</div>
			)
		} else if (s === 1) {
			return (
				<div id='tiles'>
					<img src={data.colorOptions[0].imageUrl} alt='' title={data.colorOptions[0].title} onClick={() => this.colorChange(0)} />
					<img className='selectedTile' src={data.colorOptions[1].imageUrl} alt='' title={data.colorOptions[1].title} onClick={() => this.colorChange(1)} />
					<img src={data.colorOptions[2].imageUrl} alt='' title={data.colorOptions[2].title} onClick={() => this.colorChange(2)} />
					<img src={data.colorOptions[3].imageUrl} alt='' title={data.colorOptions[3].title} onClick={() => this.colorChange(3)} />
				</div>
			)
		} else if (s === 2) {
			return (
				<div id='tiles'>
					<img src={data.colorOptions[0].imageUrl} alt='' title={data.colorOptions[0].title} onClick={() => this.colorChange(0)} />
					<img src={data.colorOptions[1].imageUrl} alt='' title={data.colorOptions[1].title} onClick={() => this.colorChange(1)} />
					<img className='selectedTile' src={data.colorOptions[2].imageUrl} alt='' title={data.colorOptions[2].title} onClick={() => this.colorChange(2)} />
					<img src={data.colorOptions[3].imageUrl} alt='' title={data.colorOptions[3].title} onClick={() => this.colorChange(3)} />
				</div>
			)
		} else if (s === 3) {
			return (
				<div id='tiles'>
					<img src={data.colorOptions[0].imageUrl} alt='' title={data.colorOptions[0].title} onClick={() => this.colorChange(0)} />
					<img src={data.colorOptions[1].imageUrl} alt='' title={data.colorOptions[1].title} onClick={() => this.colorChange(1)} />
					<img src={data.colorOptions[2].imageUrl} alt='' title={data.colorOptions[2].title} onClick={() => this.colorChange(2)} />
					<img className='selectedTile' src={data.colorOptions[3].imageUrl} alt='' title={data.colorOptions[3].title} onClick={() => this.colorChange(3)} />
				</div>
			)
		}
	}


	checkFeature = (f) => {
		if (!f)
		return (
			<div>
				<button className='feature selected_feature' onClick={() => this.featureChange(0)} >{data.featureList[1]}</button>
				<button className='feature' onClick={() => this.featureChange(1)} >{data.featureList[0]}</button>
			</div>
			)
		else
		return (
			<div>
				<button className='feature' onClick={() => this.featureChange(0)} >{data.featureList[1]}</button>
				<button className='feature selected_feature' onClick={() => this.featureChange(1)} >{data.featureList[0]}</button>
			</div>
		)
	}
/////////////////////////////////////////////////////////////////

	colorChange = (n) => {
		this.setState({selectedTitle: n});
	}

	featureChange = (n) => {
		this.setState({selectedFeature: n});
	}


/////////////////////////////////////////////////////////////////
	render() {
		return (
			<div className="App">
				<nav>
					<img src={amazon} alt="" id="amazon" />
				</nav>

				<div id="prouct_info">

					{this.checkPrev_Feature(this.state.selectedTitle, this.state.selectedFeature)}

					<div id="details">
						<h1 id='title'>{data.title}</h1>
						<p id='descirption'>{data.description}</p>

						<h3 style={{ marginBottom: 0 }}>Select Color</h3>
						
						{this.checktile(this.state.selectedTitle)}						

						<h3 style={{ marginBottom: 0 }}>Features</h3>
						{this.checkFeature(this.state.selectedFeature)}

						<button className='buy'>Buy Now</button>

					</div>

				</div>

			</div>
		);
	}
}

export default App;
