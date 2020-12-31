import { Button } from '@material-ui/core';
import milkTea from '../../assets/products/milktea.png'; 

const Content = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
  
  return (
    <div style={{backgroundColor:"#EDF2F3", flexGrow: 1, overflowY:"scroll"}}>
      <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", margin: ".5em", gridGap: ".5em"}}>
        {arr.map(() => 
          <div style={{
            backgroundColor:"#fff", 
            borderRadius:3,
            WebkitBoxShadow: "0px 0px 9px 1px rgba(0,0,0,0.2)", 
            MozBoxShadow: "0px 0px 9px 1px rgba(0,0,0,0.2)", 
            boxShadow: "0px 0px 9px 1px rgba(0,0,0,0.2)"}}
          >
            <p style={{textAlign:"center", margin: "10px 0 5px 0"}}>
              <img src={milkTea} alt="Product"/>
            </p>
            <h5 style={{textAlign:"center", margin: 0}}>Match Milk Tea</h5>
            <p style={{textAlign:"center", margin: "5px 0"}}>₱ 120.00</p>
            <p style={{textAlign:"center", margin: "10px 0"}}>
              <Button variant="contained" style={{backgroundColor:"#FB9F00", color:"#fff"}}>Add to cart</Button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
 
export default Content;