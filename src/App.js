import { useIndexedDB } from 'react-indexed-db-hook';

import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from './component/Login/Login';
import Telemetria from './component/Telemetria/Telemetria';



function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/telemetria' element={<Telemetria/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
