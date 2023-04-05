import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState} from 'react';
import Element from './components/element';

function App() {
  const [arr,setArr]=useState([]);
  const [pushinput,setPushinput]=useState('');
  const [popinput,setPopinput]=useState('');
  const [topinput,setTopinput]=useState('');
  function setValue(e){
    setPushinput(e.target.value);
  }
  function push(){
    const inpt=pushinput;
    if(inpt!=''){
      setArr([inpt,...arr]);
    }
  }
  function pop(){
    if(arr.length==0) {
      setPopinput('');
      window.alert('Stack is empty');
      return;
    }
    setPopinput(arr[0]);
    setArr(arr.filter((elem,index)=>{
      if(index!=0) return elem;
    }))
  }
  function top(){
    if(arr.length==0) {
      setTopinput('');
      window.alert('Stack is empty');
      return;
    }
    setTopinput(arr[0]);
  }
  return (
    <div className="container">
      <h1 className="header">Stack</h1>
      <div className="row">
        <div className="col md-6 stack">
          {arr.map((val,index)=><Element key={`e${index}`} val={val}/>)}
        </div>
        <div className="col md-3 operation">
          <h2>Operations</h2>
          <div className="input-group push">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={push}>
              PUSH
            </button>
            <input type="text" className="form-control" onChange={setValue}/>
          </div>
          <div className="input-group pop">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={pop}>
              POP
            </button>
            <input type="text" disabled className="form-control" value={popinput}/>
          </div>
          <div className="input-group top">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={top}>
              TOP
            </button>
            <input type="text" disabled className="form-control" value={topinput}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
