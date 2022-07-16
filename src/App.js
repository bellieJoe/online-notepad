
import './App.scss';

import {BrowserRouter, Routes, Route} from "react-router-dom";

import Nav from './Components/Nav/Nav';
import Home from "./Pages/Home/Home";
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';
import {Notes} from './Pages/Notes/Notes';
import NewNote from './Pages/Notes/NewNote/NewNote';
import List from './Pages/Notes/List/List';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signin' element={<SignIn />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/notes' element={<Notes />}>
          <Route index element={<List />} />
          <Route path='new' element={<NewNote />} />
        </Route>
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
