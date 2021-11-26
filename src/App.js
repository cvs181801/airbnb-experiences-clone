import './App.css';
import Navbar from './components/Navbar';
import Featured from './components/Featured.js'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div
        className="title"
      >Online Experiences</div>
      <p
        className="title__description"
      >Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
      <Featured/>
    </div>
    
  );
}

export default App;
