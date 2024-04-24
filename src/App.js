import './App.css';
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
    <NavBar />
    <Sidebar/>
   <Home />
    </div>
  );
}

export default App;
