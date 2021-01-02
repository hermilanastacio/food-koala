import React from 'react';
import './App.css';
import TopNav from './components/TopNav/TopNav';
import BottomNav from './components/BottomNav/BottomNav';
import Content from './components/Content/Content';
import Details from './components/Details/Details';
import SideNav from './components/SideNav/SideNav';

function App() {


  return (
    <div className="App">
      <Details/>
      <SideNav/>
      <TopNav/>
      <Content/>
      <BottomNav/>
    </div>
  );
}

export default App;
