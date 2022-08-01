//import logo from './logo.svg';
import './App.css';

import TextForm from "./components/TextForm";
import Navbar from "./components/Navbar";
import About from "./components/About";
import React, { useState } from 'react';
import Alert from "./components/Alert";

// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Link
// } from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert =(message,type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark ');
      document.body.style.backgroundColor ='grey';
      showAlert("This is dark mode","success");
    }

    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("This is Light mode","success");

    }
  }
  return (
 <>
 <div>
<Navbar title="TextUtils" home="myHome" mode ={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container">

  <About></About>
  <TextForm showAlert={showAlert} heading="Analize Text" mode={mode}/>
  </div>
</div>
    
    {/* <Router>
    <Navbar title="TextUtils" home="myHome" mode ={mode} toggleMode={toggleMode}/> */}

    {/* <Alert alert={alert}/>
        <div className="container">
        <Routes>
          <Route  path="/About" element={<About/>} >
          </Route>
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Analize Text" mode={mode}/>} />
          
        </Routes>
        </div>
        </Router> */}

</>
  );
}


export default App;
