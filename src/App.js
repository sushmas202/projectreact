// import './App.css';
import React from 'react';
// import LoginPage from './Components/Sushma';
import LoginPage1 from './Components/LoginPage1';
import RegistrationPage from './Components/RegistrationPage';
// import ShoppingCart from './Components/Shopping';
// import Product from './Components/Product';
// import LoginPage from './Components/LoginPage';
// import ChatApp from './Components/ChatApp';
// import Postlist from './Components/Api';
// import CrudApp from './Components/Api1';
// import Ref from './Components/Useref1';
// import App from './Components/Useref1';
// import 'bootstrap /dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MatrimonyApp from './Components/MatrimonyApp';
// import MusicApp from './Components/Music';

// import Login from './Components/Login';
// import Registration from './Components/Registration';
// import Name1 from './Components/Name1';
// import Component1 from './Components/UsecontextHook';

// import ReactDOM from 'react-dom';
// import App from './App';



// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

function App()
{
  return (
    <Router>
         <Routes> 
         <Route path='/' element={<LoginPage1/>}/>
         <Route path='/RegistrationPage' element={<RegistrationPage/>}/> 
         <Route path='/MatrimonyApp' element={<MatrimonyApp/>}/> 


       </Routes>
      </Router>
    //  <CrudApp/>
    
//     <div>
    
//     <LoginPage1 />
//     <RegistrationPage/>
 
// </div> 
   
  );
}

export default App;
