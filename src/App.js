import './App.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import React, { useState } from 'react';
import Alert from './components/Alert';

import { Route, Switch } from 'react-router-dom';

function App() {

  const [mode, setmode] = useState('light');    //jo phla hona chaiye hai woo rkhoooo
  const [btnmode, setbtnmode] = useState('lightmode');
  const [alert, setalert] = useState(null);

  // tb use hota hai function jb 2 se jyda value aassign krni ho

  const showalert = (msg, type) => {

    setalert({
      message: msg,
      type: type
    })

    setTimeout(() => {
      setalert(null)
    }, 1000);
  };


  const [myStyle, setstyle] = useState({
    color: 'white',
    backgroundColor: 'red'
})

  const toggleMode = () => {
    if (mode == 'light' || myStyle.color == "blue") {        //yha jo evebnt ke baad rkhna hai wo rhoko
      setmode('dark');
      setbtnmode("lightmode");
      showalert('dark mode is enable', "success");
      setstyle({
        color: 'black',
        backgroundColor: 'black'
    })
    } else {
      setmode('light');
      setbtnmode("darkmode");
      showalert('light mode is enable', "success");
      setstyle({
        color: 'blue',
        backgroundColor: 'black'
    })
    }
  };

  return (
    <>
      <div className="app">
        <Navbar title="TextEditor" aboutt="about" homet="home" mode={mode} toggleMode={toggleMode} btnmode={btnmode} />
      
      <Switch>
        <Route exact path='/About' component={About} toggleMode={toggleMode} />
        <Route exact path='/' component={Home} heading={"enter the text to analyze"} mode={mode} showaelrt={showalert} myStyle={myStyle} />
      </Switch>
      </div>
    </>
  );
}

export default App;

