import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextFom';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  const togMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#080fa2';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} togMode={togMode} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/about" element={ <About/>}/>
          <Route path="/" element={<TextForm heading="Enter text below to analyze" mode={mode} showAlert={showAlert} />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;