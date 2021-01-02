import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { Close as CloseIcon } from '@material-ui/icons';
import { useStore } from '../../common/store';
import { observer } from 'mobx-react';

const Details = () => {
  const { appStore } = useStore();

  return (
    <Dialog
      open={appStore.showDetailsModal}
      onClose={() => appStore.toggleDetailsModal(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <div style={{display:"flex", justifyContent:"space-between", margin:20}}>
        <h3 style={{margin:0}}>Product Details</h3>
        <CloseIcon onClick={() => appStore.toggleDetailsModal(false)}/>
      </div>

      <DialogContent>
        <div style={{textAlign:"center", position:"relative"}}>
          {appStore.selectedProduct.isNew && <span style={{ clipPath:"polygon(0 0, 100% 0%, 84% 100%, 0% 100%)", backgroundColor:"#de0c17", fontSize:9, fontWeight:"bold", position:"absolute", top:-7, left:0, padding:"2px 10px 2px 5px", color:"#fff"}}>NEW</span>}
          {appStore.selectedProduct.isBestSeller && <span style={{clipPath:"polygon(0 0, 100% 0%, 84% 100%, 0% 100%)", backgroundColor:"#de0c17", fontSize:9, fontWeight:"bold", position:"absolute", top:-7, left:0, padding:"2px 15px 2px 5px", color:"#fff"}}>BEST SELLER</span>}
          <img src={(`${process.env.REACT_APP_BASE_URL}/products/${appStore.selectedProduct.imageName}`)} alt="Product" style={{height: 150}}/>
        </div>
        <h3>{appStore.selectedProduct.name}</h3>
        <DialogContentText id="alert-dialog-description">
          {appStore.selectedProduct.description}
        </DialogContentText>
        <p>₱{appStore.selectedProduct.price} <del style={{fontSize:9, color:"#c1bcbc"}}>{`${appStore.selectedProduct.oldPrice ? `₱${appStore.selectedProduct.oldPrice}` : ''}`}</del></p>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => appStore.toggleDetailsModal(false)} color="primary">
          Cancel
        </Button>
        <Button onClick={() => appStore.toggleDetailsModal(false)} variant="contained" style={{backgroundColor:"#FB9F00", color:"#fff"}} autoFocus>
          Add to cart
        </Button>
      </DialogActions>
    </Dialog>
  );
}
 
export default observer(Details);