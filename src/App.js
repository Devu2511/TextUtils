
import { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode= ()=>{
    if(mode==='light'){
    setmode('dark');
    document.body.style.backgroundColor='#042743';
    showAlert("Dark mode enabled", "success");
    document.title= "Text-Utils (Light Mode)";
    }
    else{
    setmode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light mode enabled", "success");
    document.title= "Text-Utils (Dark Mode)";

    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" about="about us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
      <Route path='/about' element ={<About mode={mode}/>}>
      </Route>
      <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}>
      
      </Route>
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
