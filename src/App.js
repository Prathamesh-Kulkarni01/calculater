import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const OPERATORS =["+","-","x"," /"];
  const [inputs, setInputs] = useState({val1:"",val2:""})
  const [output, setOutput] = useState()
  const handleInputs=(e)=>setInputs((pre)=>({...pre, [e.target.name]:e.target.value}))
 const validate=()=>inputs["val1"]&&inputs["val2"]&&typeof inputs["val1"]!==Number && typeof inputs["val2"]!==Number 
 const calculate=(operator)=>{
switch (operator) {
  case '+':
    console.log(Number(inputs["val1"]) ,Number(inputs["val2"]));
    return Number(inputs["val1"]) + Number(inputs["val2"])
    case '-':
      return Number(inputs["val1"]) - Number(inputs["val2"])
      case 'x':
    return Number(inputs["val1"]) * Number(inputs["val2"])
    case '/':
    return Number(inputs["val1"]) / Number(inputs["val2"])
  default:
    break;
}
 } 
 const handleSubmit=(e)=>{
    if(!validate()){setOutput({status:"Error",value:"Input Fields can not be empty !"})}
    else{
     const value= calculate(e.target.value)
     setOutput({status:"Success !",value:value})
    }
    
  }
  return (
    <div className="App">
     <div style={{display:'flex',width:'100vw',height:'100vh',justifyContent:'center',alignItems:'center'}}>
<div style={{width:'480px', height:'480px', borderRadius:'30px',boxShadow:'-30px 20px 100px 10px #FB184E78',alignItems:'center',display:'flex',flexDirection:'column',padding:'30px'}}>
<h3 style={{color: '#2B2B2B',
textAlign: 'center',
fontFamily: 'Montserrat',
fontSize: '36px',
fontStyle: 'normal',
fontWeight: '700',
lineHeight: 'normal'}}>React Calculator</h3>
<input style={{margin:'10px',width:'300px',padding:'10px',border:'1px solid black'}} type='text' name="val1" value={inputs["val1"]} onChange={handleInputs}/>
<input style={{margin:'10px',width:'300px',padding:'10px',border:'1px solid black'}} type='text' name="val2" value={inputs["val2"]} onChange={handleInputs}/>
<div>
{OPERATORS.map(val=><input type='button' style={{margin:'10px',width:'50px',height:'50px',backgroundColor:'black',color:'white',fontSize:'35px'}} name="input1" onClick={(e)=>handleSubmit(e)} value={val} />)}
</div>
<h6 style={{color:output?.status==="Error"?'red':"green",fontSize:'20px'}}>{output?.status}</h6>
<p style={{color:'black',fontSize:'20px'}}>{output?.value}</p>
</div>
     </div>
    </div>
  );
}

export default App;
