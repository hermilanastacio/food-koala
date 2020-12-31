import './App.css';
import TopNav from './components/TopNav/TopNav';
import BottomNav from './components/BottomNav/BottomNav';
import Content from './components/Content/Content';

function App() {
  return (
    <div className="App">
      <TopNav/>
      <Content/>
      <BottomNav/>
    </div>
  );
}

export default App;
