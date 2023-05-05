import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Profile from './Components/Profile';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./styles.css"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
     

      
      </Routes>
      
    </div>
  );
}

export default App;
