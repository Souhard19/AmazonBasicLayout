
import './productDetails.css'

const productDeatils = (props) => {

     const Tiles = props.data.colorOptions.map((item, pos) => {
          let css = '';
          if (pos === props.selectedTile){
               css = 'selectedTile'
          }
          return (
               <img key={pos} className={css} src={item.imageUrl} alt={item.styleName} />
          );
     });

     const features = props.data.featureList.map((item, pos) => {
          let css = 'feature';
          if (pos === props.selectedFeature) {
               css += ' selected_feature'
          }
          return (
               <button className={css}>{props.data.featureList[pos]}</button>
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
                    {features}
               </div>

               <button className='buy'>Buy Now</button>
          </div>
     );
}

export default productDeatils;