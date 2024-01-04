
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from './component/Login/Login';
import Telemetria from './component/Telemetria/Telemetria';
import VOD from './component/VOD/VOD';



function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/telemetria' element={<Telemetria/>}/>
          <Route path='/VOD' element={<VOD/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
