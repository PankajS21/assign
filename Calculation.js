import React, { useState } from 'react'
import Footer from './Footer';

export default function Calculation() {
    const[num1,setnum1]=useState(null);
    const[num2,setnum2]=useState(null);
// const arr= new Array();
    function first(e){
console.log(e.target.value);
setnum1(e.target.value);
    }
    function second(e){
console.log(e.target.value);
setnum2(e.target.value);
    }

    function myfunc(){
        var p= new RegExp(/^[0-9 \b]+$/);
        if(num1===""){
                alert('fill number 1'); 
        }
        else if(!p.test(num1)){
            alert('Kindly enter a numeric value in Box 1');
        }
       
    }
    function myfunc2(){
        var p2= new RegExp(/^[0-9 \b]+$/);
        if(num2===""){
            alert('fill number 2');
        }
        else if(!p2.test(num2)){
            alert('Kindly enter a numeric value in Box 2');
        }
    }
  return (
    <div id='nums' style={{textAlign:"center"}}>
      <div className='num' 
      style={{position:"relative",left:"12px",marginTop:"14px"}}>
        First Number  : <input onChange={first} style={{backgroundColor:"#e9e9e9",border:"none",height: "18px",width: "25vw"}}/>
        </div>
      <div className='num' style={{marginTop:"14px"}}>Second Number : <input onChange={second} style={{backgroundColor:"#e9e9e9",border:"none",height: "18px",width: "25vw"}}/></div>
      <div style={{marginTop:"14px"}}><button onClick={()=>{myfunc();myfunc2(); console.log(parseInt(num1)+parseInt(num2));}} style={{backgroundColor:"white",borderStyle:"groove",borderColor:"#e9e9e9",position:"relative",left:"57vh",borderRadius:"4px",height:"11vh"}}>Generate Steps</button></div>
      <Footer values={num1}/>
    </div>
  )
}
