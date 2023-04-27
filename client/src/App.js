import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';
import { Routes,Route} from "react-router-dom";
import { useLocation } from 'react-router-dom';
import SearchBar from './Components/SearchBar/SearchBar';
import Cards from './Components/Cards/Cards';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname === "/home" && <SearchBar/>}
      <Routes>
        <Route path='/' element= {<LandingPage/>}/>
        <Route path='/home' element= {<Cards/>}/>

      </Routes>
    </div>
  );
}

export default App;
