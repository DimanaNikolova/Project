import React from 'react';
import './App.css';
import Footer from '../../Components/Footer/Footer'
import Welcome from '../../Components/Welcome/Welcome'


function GuestPage() {
  return (
    <div className="App">
      <Welcome />
      <Footer/>
    </div>
  );
}

export default GuestPage;
