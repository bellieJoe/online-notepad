import logo from './logo.svg';
import './App.scss';

import {BrowserRouter, Routes, Route} from "react-router-dom";

import Nav from './components/Nav/Nav';
import Home from "./Pages/Home/Home";
import SignIn from './Pages/SignIn/SignIn';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signin' element={<SignIn />}></Route>
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
