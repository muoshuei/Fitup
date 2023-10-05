import React from 'react';
import './App.css';
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import './styles/action.css';
import routes from './routes';
import testRoutes from './testRoutes';
import { getTitleFromRoute } from './utils/title';
import { Helmet } from 'react-helmet';

            
function App() {
  const location = useLocation();
  return (
    <div className="App">
        <Helmet>
            <title>{getTitleFromRoute(location.pathname)}</title>
        </Helmet>
        <Routes>
          {routes.map((e) => <Route key={e.path} path={e.path} element={e.element}></Route>)}
          {testRoutes.map((e) => <Route key={e.path} path={e.path} element={e.element}></Route>)}

        </Routes>
    </div>
    
  );
}

export default App;
