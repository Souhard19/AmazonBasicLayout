import './App.css';
import amazon from './images/amazon_img.jpeg';
import data from './Components/component_data'


function App() {

	var time = `${new Date().getHours() > 9 ? new Date().getHours() : '0'+new Date().getHours()}:${new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes()}`;

	return (
		<div className="App">
			<nav>
				<img src={amazon} alt="" id="amazon" />
			</nav>

			<div id="prouct_info">
				
				<div id="image_display_section">
					<img src={data.colorOptions[0].imageUrl} alt="" />

					{/* <div className='time_feature'>
                                   <p>{time}</p>
                              </div> */}
					<div className='heartbeat_feature'>
						<i className='fas fa-heartbeat'></i>
						<p>78</p>
					</div>
				</div>

				<div id="details">
					<h1 id='title'>{data.title}</h1>
					<p id='descirption'>{data.description}</p>

					<h3 style={{ marginBottom: 0 }}>Select Color</h3>
					<div id='tiles'>
						<img className='selectedTile' src={data.colorOptions[0].imageUrl} alt='' title={data.colorOptions[0].title} />
						<img src={data.colorOptions[1].imageUrl} alt='' title={data.colorOptions[1].title} />
						<img src={data.colorOptions[2].imageUrl} alt='' title={data.colorOptions[2].title} />
						<img src={data.colorOptions[3].imageUrl} alt='' title={data.colorOptions[3].title} />
					</div>
					
					<h3 style={{ marginBottom: 0}}>Features</h3>
					<div>
						<button className='feature selected_feature'>{data.featureList[1]}</button>
						<button className='feature'>{data.featureList[0]}</button>
					</div>

					<button className='buy'>Buy Now</button>

				</div>

			</div>

		</div>
	);
}

export default App;
