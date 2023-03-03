
import './App.css';
import MYContent from './Components/Pages/MYContent';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Myline from './Components/Pages/Myline';
import Myarea from './Components/Pages/Myarea';
import Myradar from './Components/Pages/Myradar';
import Myscatter from './Components/Pages/Myscatter';
import Mypie from './Components/Pages/Mypie';


function App() {
  return (
  <>
 
  <BrowserRouter>
      <Routes>
        <Route path="/" element={ <MYContent/>}/>
        <Route path="/line" element={ <Myline/>}/>
        <Route path="/area" element={ <Myarea/>}/>
        <Route path="/radar" element={<Myradar/>}/>
        <Route path="/pie" element={<Mypie/>}/>
        <Route path="/scatter" element={ <Myscatter/>}/>
       
      
      
      </Routes>
    </BrowserRouter>

  </>
  );
}

export default App;
