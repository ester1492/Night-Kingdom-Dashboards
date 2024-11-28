import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import MatehNetzivut from './components/MatehNetzivut';
import Machoz from './components/Machoz';
import Bisar from './components/Bisar';
import Soher from './components/Soher';
import './styles.css'
function App() {
  return (
    // <h1>Hi!</h1>
    
    <BrowserRouter basename='/Night-Kingdom-Dashboards/'>
      <Routes >
        <Route path="/" element={<MatehNetzivut />} />
        <Route path="/Machoz" element={<Machoz />} />
        <Route path="/Bisar" element={<Bisar />} />
        <Route path="/Soher" element={<Soher />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//      <h1>hellow</h1>
//     </>
//   )
// }

// export default App
