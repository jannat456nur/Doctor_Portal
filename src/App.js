import {
  Routes,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import './App.css';
import Appointment from "./pages/Appointment/Appointment/Appointment";
import Home from "./pages/Home/Home/Home";


function App() {
  return (
    <div className="App">
        <Router>
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="appointment" element={<Appointment />} />
         
         
        </Routes>
      
      </Router>
    </div>
  );
}

export default App;
