import logo from './logo.svg';
import './App.css';
import { PrimeReactProvider } from 'primereact/api';
import { Menu } from './landing/components/menu/Menu';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { Home } from './landing/pages/home/Home';
        

function App() {
  return (
    <PrimeReactProvider>
      <div className="App">
        <Menu />
        <Home />
      </div>
    </PrimeReactProvider>
  );
}

export default App;
