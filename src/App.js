import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Checkout from "./Checkout";

function App() {
  return (
    
            
 <Router>
     <div className="app">
     
      <Routes>  
          
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/checkout' element={<Checkout/>} > </Route>
       
     </Routes>
      </div>
</Router>
    
  );
}

export default App;
