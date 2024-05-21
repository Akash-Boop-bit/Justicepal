import React, { Children, useState } from "react";
import Chat from "./components/Chat";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import classes from "./App.module.css";
import Women from './components/Women'
import Elderly from './components/Elderly'
import Adivasis from './components/Adivasis'
import Dalits from './components/Dalits'
import Religious from './components/Religious'
import Childr from './components/Childr'
import Disabled from './components/Disabled'
import Case from "./components/Case";
import Ngo from "./components/Ngo";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";


const App = () => {
  // const [isnav, setIsnav] = useState(true)

  // const nav = ()=> {
  //   let ele = document.getElementById('nav');
  //   ele.style.transform = 'translateX(-100%)'
  //   // setIsnav(!isnav)
  // }

  return (
    <>
      <BrowserRouter>
        <div className={classes.main}>
          { <div id="nav" className={classes.main2}>
            <Navbar />
          </div>}
          {/* <button onClick={nav} className={classes.btn}>click me</button> */}
          <div className={classes.main3}>
            <Routes>
              <Route path="/" element={<Chat />} />
              <Route path="/women" element={<Women />} />
              <Route path="/elderly" element={<Elderly />} />
              <Route path="/adivasis" element={<Adivasis />} />
              <Route path="/dalits" element={<Dalits />} />
              <Route path="/religious" element={<Religious />} />
              <Route path="/children" element={<Childr />} />
              <Route path="/disabled" element={<Disabled />} />
              <Route path="/ngo" element={<Ngo />} />
              <Route path="/case" element={<Case />} />
              <Route path="/page1" element={<Page1 />} />
              <Route path="/page2" element={<Page2 />} />
              <Route path="/page3" element={<Page3 />} />
              <Route path="/page4" element={<Page4 />} />
              <Route path="/*" element={<h1>Wrong url</h1>} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
