import React, { Fragment } from 'react';
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
      <div style={{flexGrow: 1}}>
        {appStore.cart && appStore.cart.length > 0
          ? <Fragment>
              <h1>My Cart</h1>
              {appStore.cart.map(item => 
                <p>{item.name}</p>
              )}
            </Fragment>
          : <EmptyCartMessage/>
        }
      </div>
      <BottomNav/>
    </div>
  );
}
 
export default Cart;