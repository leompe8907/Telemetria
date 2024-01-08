import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from './page/Login/Login';
import Telemetria from './component/Telemetria/Telemetria';
import VOD from './component/VOD/VOD';
import Prueba from './component/Prueba/prueba';



function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/telemetria' element={<Telemetria/>}/>
          <Route path='/VOD' element={<VOD/>}/>
          <Route path='/prueba' element={<Prueba/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
