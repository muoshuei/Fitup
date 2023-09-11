import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './styles/action.css'
import APITest from './components/APITest/APITest';
import SpeechTest from './components/SpeechTest/SpeechTest';

import routes from './routes';
// import Feature from './components/Feature/Feature';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            {routes.map((e) => <Route key={e.path} path={e.path} element={e.element}></Route>)}
            
            <Route path="/apitest" element={<APITest></APITest>}></Route>
            <Route path="/speechtest" element={<SpeechTest></SpeechTest>}></Route>

          </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
