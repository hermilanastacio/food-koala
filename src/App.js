import React, { useState } from 'react';
import './App.css';
import TopNav from './components/TopNav/TopNav';
import BottomNav from './components/BottomNav/BottomNav';
import Content from './components/Content/Content';
import Details from './components/Details/Details';
import SideNav from './components/SideNav/SideNav';

function App() {
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(!open);
  };

  return (
    <div className="App">
      <Details 
        onToggle={toggleModal}
        open={open} 
      />
      <SideNav/>
      <TopNav/>
      <Content 
        onToggle={toggleModal}
      />
      <BottomNav/>
    </div>
  );
}

export default App;
