import React from 'react';
import BottomNav from '../../components/BottomNav/BottomNav';
import TopNav from '../../components/TopNav/TopNav';
import Details from '../../components/Details/Details';
import SideNav from '../../components/SideNav/SideNav';
import EmptyCartMessage from '../../components/Messages/EmptyCart';
import { useStore } from '../../common/store';

const Cart = () => {
  const { appStore } = useStore();
  
  return (
    <div className="App"> 
      <Details/>
      <SideNav/>
      <TopNav/>
      <div style={{flexGrow: 1, overflowY: "scroll"}}>
        {appStore.cart && appStore.cart.length > 0
          ? <div style={{padding:"0 20px"}}>
              <h3>Your Cart</h3>
              {appStore.cart.map((item, i) => 
                <p key={i}>{item.name}</p>
              )}
            </div>
          : <EmptyCartMessage/>
        }
      </div>
      <BottomNav/>
    </div>
  );
}
 
export default Cart;