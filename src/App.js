import React, { useState } from 'react';
import './App.css';
import TopNav from './components/TopNav/TopNav';
import BottomNav from './components/BottomNav/BottomNav';
import Content from './components/Content/Content';
import Details from './components/Details/Details';
import SideNav from './components/SideNav/SideNav';

function App() {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState({ left: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const toggleModal = () => {
    setOpen(!open);
  };

  return (
    <div className="App">
      <Details 
        onToggle={toggleModal}
        open={open} 
      />
      <SideNav
        state={state}
        toggleDrawer={toggleDrawer}
      />
      <TopNav
        toggleDrawer={toggleDrawer}
      />
      <Content 
        onToggle={toggleModal}
      />
      <BottomNav/>
    </div>
  );
}

export default App;
