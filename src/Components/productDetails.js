
import data from './component_data'
import './productDetails.css'

const productDeatils = (props) => {

     return (
          <div className='productDetails details'>
               <h1 id='title'>{data.title}</h1>
               <p id='descirption'>{data.description}</p>

               <h3 style={{ marginBottom: 0 }}>Select Color</h3>
               <div id='tiles'>
                    <img className='selectedTile' src={data.colorOptions[0].imageUrl} alt='' title={data.colorOptions[0].title} />
                    <img src={data.colorOptions[1].imageUrl} alt='' title={data.colorOptions[1].title} />
                    <img src={data.colorOptions[2].imageUrl} alt='' title={data.colorOptions[2].title} />
                    <img src={data.colorOptions[3].imageUrl} alt='' title={data.colorOptions[3].title} />
               </div>

               <h3 style={{ marginBottom: 0 }}>Features</h3>
               <div>
                    <button className='feature selected_feature'>{data.featureList[1]}</button>
                    <button className='feature'>{data.featureList[0]}</button>
               </div>

               <button className='buy'>Buy Now</button>
          </div>
     );
}

export default productDeatils;