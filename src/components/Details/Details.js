import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { Close as CloseIcon } from '@material-ui/icons';
import milkTea from '../../assets/products/milktea.png';

const Details = ({ onToggle, open }) => {

  return (
    <Dialog
      open={open}
      onClose={onToggle}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <div style={{display:"flex", justifyContent:"space-between", margin:20}}>
        <h3 style={{margin:0}}>Product Details</h3>
        <CloseIcon onClick={onToggle}/>
      </div>

      <DialogContent>
        <div style={{textAlign:"center"}}>
          <img src={milkTea} alt="Product" style={{height: 150}}/>
        </div>
        <h3>Matcha Milk Tea</h3>
        <DialogContentText id="alert-dialog-description">
          Let Google help apps determine location. This means sending anonymous location data to
          Google.
        </DialogContentText>
        <p>₱ 120.00</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onToggle} color="primary">
          Cancel
        </Button>
        <Button onClick={onToggle} variant="contained" style={{backgroundColor:"#FB9F00", color:"#fff"}} autoFocus>
          Add to cart
        </Button>
      </DialogActions>
    </Dialog>
  );
}
 
export default Details;