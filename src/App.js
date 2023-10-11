import './App.css';
import Content from './component/Content';
import Navbar from './component/Navbar';
import Alert from './component/Alert';
import Textform from './component/Textform';
import React, { useState } from 'react'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const[Mode, setMode] = useState('light');
  const[alert, setAlert] = useState(' ');
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      Type: type
    })
    setTimeout(() => {
      setAlert(' ');
    }, 2500);
  }
  const toogleMode = () =>{
    if(Mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#e0936d';
      showAlert("Dark mode has been enabled", "danger");
      document.title = "TextUtils - Dark Mode";

    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark mode has been disabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <div>
      {/* <Router> */}
      <Navbar mode = {Mode} toogleMode = {toogleMode}/>
      <Alert alert = {alert} showAlert = {showAlert}/>
      
      {/* <div className="container">
          <Routes>
            <Route exact path="/content" element={<Content />}>
            </Route>
            <Route exact path="/" element={<Textform mode={Mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
        </div>
      </Router> */}
      <Textform mode = {Mode} showAlert = {showAlert}/>

     
    </div>
  );
}

export default App;
