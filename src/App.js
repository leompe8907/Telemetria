
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from './component/Login/Login';
import { Telemetria } from './component/telemetria/Telemetria';
import TuComponente from './component/pruebas/TuComponente';


function App() {



  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/telemetria' element={<Telemetria/>}/>
          <Route path='/prueba' element={<TuComponente/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
