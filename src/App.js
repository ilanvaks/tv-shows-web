import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './scenes/Home';
import AddShow from './scenes/AddShow';
import Login from './scenes/Login';
import SignUp from './scenes/SignUp';
import './styles/App.css';

function App() {

  const [shows, setShows] = useState()
  const [user, setUser] = useState()

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home shows={shows} setShows={setShows}/>}/>
          <Route path='/signup' element={<SignUp setUser={setUser}/>}/>
          <Route path='/addshow' element={<AddShow setShows={setShows}/>}/>
          <Route path='/login' element={<Login setUser={setUser}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
