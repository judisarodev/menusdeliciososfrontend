import './App.css';
import { PrimeReactProvider } from 'primereact/api';

import { Home } from './landing/pages/home/Home';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './backoffice/pages/login/Login';
        

function App() {

  

  return (
    <PrimeReactProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </PrimeReactProvider>
  );
}

export default App;
