import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';


import Home from './Components/HomeUi/Home';
import Login from './Components/Login/Login.';
import { LogginProvider } from './Context/LoginContext/LoginContext';
import Movies from './Pages/Movies/Movies';
import Shows from './Pages/Tv shows/Shows';
import NewPopular from './Pages/New & Popular/NewPopular';




function App() {
  return (

    <div className='App'>
      <LogginProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/movies' element={<Movies />} />
            <Route path='/tvshows' element={<Shows />} />
            <Route path='/newpopular' element={<NewPopular />} />
          </Routes>
        </Router>
      </LogginProvider>
    </div>


  );
}

export default App;
