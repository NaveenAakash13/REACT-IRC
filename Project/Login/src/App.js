import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<Login/>}/>
      <Route exact path='/Register' element={<Register/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;