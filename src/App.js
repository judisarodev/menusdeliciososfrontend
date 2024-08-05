import './App.css';
import { useState } from 'react';
import { PrimeReactProvider } from 'primereact/api';
import { Menu } from './landing/components/menu/Menu';
import { Home } from './landing/pages/home/Home';
import "primereact/resources/themes/lara-light-cyan/theme.css";

        

function App() {

  const [selectedMenuItem, setSelectedMenuItem] = useState(0);

  return (
    <PrimeReactProvider>
      <div className="App">
        <Menu setSelectedMenuItem={setSelectedMenuItem}/>
        <Home selectedMenuItem={selectedMenuItem}/>
      </div>
    </PrimeReactProvider>
  );
}

export default App;
