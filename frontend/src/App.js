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
import testRoutes from './testRoutes';
// import Feature from './components/Feature/Feature';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            {routes.map((e) => <Route key={e.path} path={e.path} element={e.element}></Route>)}
            {testRoutes.map((e) => <Route key={e.path} path={e.path} element={e.element}></Route>)}

          </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
