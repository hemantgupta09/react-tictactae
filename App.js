import React, { useEffect, useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  let [turn, setturn] = useState("X");
  let [start, sett]=useState({a:"",b:"",c:"",d:"",e:"",f:"",g:"",h:"",i:""});
  let [win, showwin]=useState();
  useEffect( () => {
    checkwin();
  });
  const click = (e) => {
    if(e.target.value==="")
    {
      console.log(e.target.name);
      console.log(e.target.name);
      sett({...start,[e.target.name]:turn});
      changeturn();
    }
  }
  const checkwin = () => {
    if(start.a==="X" && start.b==="X" && start.c==="X")
    {
      showwin("winner is X");
    }
    else if(start.a==="0" && start.b==="0" && start.c==="0")
    {
      showwin("winner is 0");
    }
    else if(start.d==="X" && start.e==="X" && start.f==="X")
    {
      showwin("winner is X");
    }
    else if(start.d==="0" && start.e==="0" && start.f==="0")
    {
      showwin("winner is 0");
    }
    else if(start.g==="X" && start.h==="X" && start.i==="X")
    {
      showwin("winner is X");
    }
    else if(start.g==="0" && start.h==="0" && start.i==="0")
    {
      showwin("winner is 0");
    }
    else if(start.a==="X" && start.e==="X" && start.i==="X")
    {
      showwin("winner is X");
    }
    else if(start.a==="0" && start.e==="0" && start.i==="0")
    {
      showwin("winner is 0");
    }
    else if(start.a==="X" && start.d==="X" && start.g==="X")
    {
      showwin("winner is X")
    }
    else if(start.a==="0" && start.d==="0" && start.g==="0")
    {
      showwin("winner is 0");
    }
    else if(start.b==="X" && start.e==="X" && start.h==="X")
    {
      showwin("winner is X");
    }
    else if(start.b==="0" && start.e==="0" && start.h==="0")
    {
      showwin("winner is 0");
    }
    else if(start.c==="X" && start.f==="X" && start.i==="X")
    {
      showwin("winner is X");
    }
    else if(start.c==="0" && start.f==="0" && start.i==="0")
    {
      showwin("winner is 0");
    }
    else if(start.c==="X" && start.e==="X" && start.g==="X")
    {
      showwin("winner is X")
    }
    else if(start.c==="0" && start.e==="0" && start.g==="0")
    {
      showwin("winner is 0")
    }
  }
  const changeturn = () => {
    turn==="X"?setturn("0"):setturn("X");
  }
  return (
    <>
    <div className='container'>
      <div className='row'>
        <div className='col-sm-5'>
        </div>
        <div className='col-sm-2 text-sm-center mt-sm-5'>
          <h3 align="center" className='text-warning fs-2'>Tic Tac Toe</h3>
          <h4>Turn for {turn}</h4>
          <h5>{win}</h5>
          <div className='row'  style={{height:"60px"}}>
            <div className='col-sm-4 fs-1 fw-bolder border'><button className='btn btn-danger text-light btn-lg' value={start.a} onClick={click} name="a">{start.a}</button></div>
            <div className='col-sm-4 fs-1 fw-bolder border'><button className='btn btn-danger text-light btn-lg' value={start.b} onClick={click} name="b">{start.b}</button></div>
            <div className='col-sm-4 fs-1 fw-bolder border'><button className='btn btn-danger text-light btn-lg' value={start.c} onClick={click} name="c">{start.c}</button></div>
          </div>
          <div className='row' style={{height:"60px"}}>
            <div className='col-sm-4 fs-1 fw-bolder border'><button className='btn btn-danger text-light btn-lg' value={start.d} onClick={click} name="d">{start.d}</button></div>
            <div className='col-sm-4 fs-1 fw-bolder border'><button className='btn btn-danger text-light btn-lg' value={start.e} onClick={click} name="e">{start.e}</button></div>
            <div className='col-sm-4 fs-1 fw-bolder border'><button className='btn btn-danger text-light btn-lg' value={start.f} onClick={click} name="f">{start.f}</button></div>
          </div>
          <div className='row' style={{height:"60px"}}>
            <div className='col-sm-4 fs-1 fw-bolder border'><button className='btn btn-danger text-light btn-lg' value={start.g} onClick={click} name="g">{start.g}</button></div>
            <div className='col-sm-4 fs-1 fw-bolder border'><button className='btn btn-danger text-light btn-lg' value={start.h} onClick={click} name="h">{start.h}</button></div>
            <div className='col-sm-4 fs-1 fw-bolder border'><button className='btn btn-danger text-light btn-lg' value={start.i} onClick={click} name="i">{start.i}</button></div>
            <button className='btn btn-outline-warning mt-sm-2 fw-semibold' onClick={()=>{
              sett({a:"",b:"",c:"",d:"",e:"",f:"",g:"",h:"",i:""});
              showwin();
            }}>reset</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
export default App;