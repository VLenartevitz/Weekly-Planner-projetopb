import Cadastro from "./Pages/Cadastro.js";
import Dashboard from './Pages/Dashboard.js';
import Login from './Pages/Login.js'
import {Switch, BrowserRouter , Route, Routes} from 'react-router-dom'

const App = () =>{
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' exact element={<Cadastro/>}/>
      </Routes>
      <Routes>
        <Route path='/Login' exact element={<Login/>}/>
      </Routes>
      <Routes>
        <Route path='/Dashboard' exact element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
        
  );
};
export default App;