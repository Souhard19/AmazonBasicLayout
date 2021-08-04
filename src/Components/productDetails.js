
import './productDetails.css'

const productDeatils = (props) => {

     const Tiles = props.data.colorOptions.map((item, pos) => {
          return (
               <img key={pos} src={item.imageUrl} alt={item.styleName} />
          );
     });

     return (
          <div className='productDetails details'>
               <h1 id='title'>{props.data.title}</h1>
               <p id='descirption'>{props.data.description}</p>

               <h3 style={{ marginBottom: 0 }}>Select Color</h3>
               <div id='tiles'>
                    {Tiles}
               </div>

               <h3 style={{ marginBottom: 0 }}>Features</h3>
               <div>
                    <button className='feature selected_feature'>{props.data.featureList[1]}</button>
                    <button className='feature'>{props.data.featureList[0]}</button>
               </div>

               <button className='buy'>Buy Now</button>
          </div>
     );
}

export default productDeatils;