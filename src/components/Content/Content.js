import { Button } from '@material-ui/core';
import products from '../../data/products.json';

const Content = ({ onToggle }) => {

  const addToCart = (e) => {
    e.stopPropagation();
  }
  
  return (
    <div style={{backgroundColor:"#EDF2F3", flexGrow: 1, overflowY:"scroll"}}>
      <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", margin: ".5em", gridGap: ".5em"}}>
        {products.map((product, index) => 
          <div style={{
            backgroundColor:"#fff", 
            borderRadius:3,
            WebkitBoxShadow: "0px 0px 9px 1px rgba(0,0,0,0.2)", 
            MozBoxShadow: "0px 0px 9px 1px rgba(0,0,0,0.2)", 
            boxShadow: "0px 0px 9px 1px rgba(0,0,0,0.2)"}}
            onClick={onToggle}
            key={index}
          >
            <p style={{textAlign:"center", margin: "10px 0 5px 0"}}>
              <img src={`/products/${product.imageName}`} alt="Product" style={{height:70}}/>
            </p>
            <h5 style={{textAlign:"center", margin: 0}}>{product.name}</h5>
            <p style={{textAlign:"center", margin: "5px 0"}}>₱{product.price}</p>
            <p style={{textAlign:"center", margin: "10px 0"}}>
              <Button variant="contained" onClick={e => addToCart(e)} style={{backgroundColor:"#FB9F00", color:"#fff", padding: "3px 7px", fontSize:8}}>Add to cart</Button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
 
export default Content;