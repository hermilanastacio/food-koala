import BottomNav from '../../components/BottomNav/BottomNav';
import TopNav from '../../components/TopNav/TopNav';
import Details from '../../components/Details/Details';
import SideNav from '../../components/SideNav/SideNav';

const Cart = () => {
  return (
    <div className="App">
      <Details/>
      <SideNav/>
      <TopNav/>
      <div style={{flexGrow: 1}}>
        <h1>My Cart</h1>
      </div>
      <BottomNav/>
    </div>
  );
}
 
export default Cart;