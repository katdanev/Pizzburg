// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/main';
import Menu from './components/menu';
import Order from './components/order';
import './App.css'; // Підключаємо стилі з App.css
import Header from './components/app/header';
import Navigation from "./components/app/navigation";
import Socialbar from "./components/app/socialbar";
import Footer from "./components/app/footer";

function App() {
    return (
        
        <Router>
            <div className={"app"}>
                <Header/>
                <div className='navSocial'>
                    <Navigation/>
                    <Socialbar/>
                </div>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/order" element={<Order />} />
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
