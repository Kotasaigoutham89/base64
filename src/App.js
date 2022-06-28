import { TextField } from '@mui/material';
import './App.css';
import decode from "./images/base64icon.png"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [category, setCategory] = useState("decode")
  const [code,setCode]= useState("")
  const [result,setResult]= useState("")
  const handlecategory=(e)=>{
    setCategory(e.target.value)
    setCode("")
    setResult("")
  }
  const handlebutton =()=>{
    console.log(category)
    if(category=="decode")
    {
    const change = atob(code)
    setResult(change)
    }
    if(category=="encode")
    {
    const change = btoa(code)
    setResult(change)
    }
  }
  return (
    <div className="App">
      <div className="navbar">
        <div className='flex-row'>
          <img src={decode} width="75px" height="75px" />
          <div>
            <div className='title'>Base 64</div>
            <div className='under-title'>(Encode and Decode)</div>
          </div>
        </div>
        <div className='radio-buttons'>
          <FormControl style={{ display: "flex", flexDirection: "row", paddingLeft: 60 }}>
            <FormLabel style={{ padding: 10 }}>Select the type</FormLabel>
            <RadioGroup value={category} onChange={handlecategory} style={{ display: "flex", flexDirection: "row" }}>
              <FormControlLabel value="decode" control={<Radio />} label="Decode" />
              <FormControlLabel value="encode" control={<Radio />} label="Encode" />
            </RadioGroup>
          </FormControl>
        </div>
        <div />
      </div>
      <div className='centering'>
        <div className='flex-column input-field'>
          <div className="input-title">Code</div>
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={4}
            placeholder="type or paste the code"
            value={code}
            onChange={(e)=>setCode(e.target.value)}
          />
        </div>
        <div>
          <Button variant="contained" onClick={handlebutton}>{category == "decode" ? "decode" : "encode"}</Button>
        </div>
        <div className='flex-column input-field'>
          <div  className="input-title">Result</div>
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={4}
            placeholder="result"
            value={result}
            onChange={(e)=>setResult(e.target.value)}
          />
        </div>
      </div>

    </div>
  );
}

export default App;
