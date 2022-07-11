import React from 'react';
import { Button } from 'antd';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogoPage from './pages/LogoPage';
import MainPage from './pages/MainPage';
import Home from './Home';
import Payment from './Payment';

// import Routes from "./routes/Routes";


  

function App() {
  return (
    // <Routes />
    <BrowserRouter>
		  <Routes>
			  <Route path="/" element={<LogoPage />}></Route>
			  <Route path="/main" element={<MainPage />}></Route>
			  {/* <Route exact path="/" component={Home} /> */}
			  <Route exact path="/payment" element={<Payment></Payment>} />
		  </Routes>
	</BrowserRouter>
  );
}

export default App;
