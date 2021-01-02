import { Button } from '@material-ui/core';
import products from '../../data/products.json';
import { useStore } from '../../common/store';
import { observer } from 'mobx-react';

const Content = () => {
  const { appStore } = useStore();

  const addToCart = (e) => {
    e.stopPropagation();
  }

  const selectProduct = (product) => {
    appStore.toggleDetailsModal(true);
    appStore.setSelectedProduct(product);
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
            onClick={() => selectProduct(product)}
            key={index}
          >
            <div style={{textAlign:"center", margin: "10px 0 5px 0", paddingTop: product.isNew || product.isBestSeller ? 15 : 0, position:"relative"}}>
              {product.isNew && <span style={{ clipPath:"polygon(0 0, 100% 0%, 84% 100%, 0% 100%)", backgroundColor:"#de0c17", fontSize:9, fontWeight:"bold", position:"absolute", top:-7, left:0, padding:"2px 10px 2px 5px", color:"#fff"}}>NEW</span>}
              {product.isBestSeller && <span style={{clipPath:"polygon(0 0, 100% 0%, 84% 100%, 0% 100%)", backgroundColor:"#de0c17", fontSize:9, fontWeight:"bold", position:"absolute", top:-7, left:0, padding:"2px 15px 2px 5px", color:"#fff"}}>BEST SELLER</span>}
              <img src={(`${process.env.REACT_APP_BASE_URL}/products/${product.imageName}`)} alt="Product" style={{height:70}}/>
            </div>
            <h5 style={{textAlign:"center", margin: 0}}>{product.name}</h5>
            <p style={{textAlign:"center", margin: "5px 0"}}>₱{product.price} <del style={{fontSize:9, color:"#c1bcbc"}}>{`${product.oldPrice ? `₱${product.oldPrice}` : ''}`}</del></p>
            <p style={{textAlign:"center", margin: "10px 0"}}>
              <Button variant="contained" onClick={e => addToCart(e)} style={{backgroundColor:"#FB9F00", color:"#fff", padding: "3px 7px", fontSize:8}}>Add to cart</Button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
 
export default observer(Content);