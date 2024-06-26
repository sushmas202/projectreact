import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


//let x=20;
//let text ='bye';
//if(x<10)
//{
  //text="Hello"
//}
//const element =<h1>{text}</h1>
// const element =<div><h1>hello jsx{5+5}</h1><h2>hii</h2></div>
// const element =<h1>hello jsx</h1>
// const element=React.createElement('h1',null,'hello world');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
   <App />
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
