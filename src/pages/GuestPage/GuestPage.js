import React from 'react';
import './App.css';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Welcome from '../../Components/Welcome/Welcome'


function GuestPage() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Welcome />
      <Footer/>
    </div>
  );
}

export default GuestPage;
