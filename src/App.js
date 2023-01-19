import Cadastro from "./Pages/Cadastro.js";
import Home from './Pages/Home.js';
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
    </BrowserRouter>
        
  );
};
export default App;