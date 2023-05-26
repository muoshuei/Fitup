import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import Train from "./components/Train/Train";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <div className='container'>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
            <Route path="/train" element={<Train/>}></Route>
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
