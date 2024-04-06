import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Cashier from './cashier';

import Users from './users';
import Contact from './contact';
import Aboutus from './aboutus';
import Menu from './menu';
import President from './President';
import Login from './login';
import Register from './register';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Menu/>
  <Routes>
    <Route path='/' element={<App/>}></Route>
    <Route path='/cashier' element={<Cashier/>}></Route>
    <Route path='/president' element={<President/>}></Route>
    <Route path='/users' element={<Users/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/aboutus' element={<Aboutus/>}></Route>
  </Routes>
  </BrowserRouter>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
