import './App.css';
import Navbar from './components/Navbar';
import Content from  './components/Content';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Content />
      </div>
    </div>
  );
}

export default App;
