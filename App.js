// import './App.css';
import Header from './components/Header';
import Calculation from './components/Calculation';
// import Footer from './components/Footer';
// import React, {useEffect, useState} from 'react';

function App() {

  // const [backdata, setbackdata]=useState([{}]);

  // useEffect(()=>{
  //   fetch("/api").then(
  //     response => response.json()
  //   ).then(
  //     data =>{
  //       setbackdata(data);
  //     }
  //   )
  // }, []);


  return (
    <div className="App">
{/* {(typeof backdata.users === "undefined") ? (
  <p>Loading...</p>
): (
  backdata.users.map((user,i)=>(
    <p key={i}>{user}</p>
  ))
)} */}


     <Header/>
     <Calculation/> 
     {/* <Footer/>  */}
    </div>
  );
}

export default App;
