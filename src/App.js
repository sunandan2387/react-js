import React from "react";
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Next from './Next.jsx' 
// import Dashboard from "./Dashboard";
import Localstorage from "./Localstorage.jsx";


function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Localstorage />} />
                    <Route path="next" element={<Next />} />
                </Routes>
            </Router>
            
            {/* <Dashboard /> */}
        </div>
    );
}

export default App;