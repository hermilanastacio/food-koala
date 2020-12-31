import './App.css';
import TopNav from './components/TopNav';
import BottomNav from './components/BottomNav';
import Content from './components/Content';

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
