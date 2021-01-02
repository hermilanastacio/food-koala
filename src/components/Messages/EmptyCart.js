import EmptyCart from '../../assets/images/empty-cart.png';

const EmptyCartMessage = () => {
  return (
    <div style={{height:"100%", width:"100%", display:"flex", alignItems:"center", justifyContent:"center"}}>
      <img src={EmptyCart} style={{height: 120}} alt="Cart Empty"/>
    </div>
  );
}
 
export default EmptyCartMessage;