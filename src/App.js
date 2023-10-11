
import { Button, Stack, TextField } from '@mui/material';
import './App.css';
import { useState } from 'react';




function App() {

  const [principle, setPrinciple] = useState("")
  const [rate, setRate] = useState("")
  const [year, setyear] = useState("")
  const [interest, setInterest] = useState(0)

  // console.log(principle,rate.year);


  const calculateInterset =(e) => {
    e.preventDefault()

    console.log(principle, rate, year);

    if (!principle || !rate || !year) {
      alert("please fill the form completeley")
    }
          
          else {
    setInterest(principle * rate * year / 100)
  }

}


const resetform = () => {

  setPrinciple("")
  setInterest("0")
  setRate("")
  setyear("")


}

return (
  <>

    <div className="app">

      <div className='container'>

        {/* heading */}
        <div className='heading-text'>
          <h3 className='title'>SIMPLE CALCULATOR</h3>
          <p className='title-para'>Calculate your simple interest</p>
        </div>

        <div className='amount-card'>

          <div className='card-text'>

            <h3 className='total-amount'>₹{interest}</h3>
            <p className='total-para'>Total Simple Interest</p>


          </div>


        </div>


        <form onSubmit={calculateInterset} >

          {/* to hold text feild */}

          <div className='text-fields'>

            {/* principle amount */}

            <div className='input'>

              <TextField onChange={e => setPrinciple(e.target.value)}
                className='outlined-basic' id="outlined-basic" label="Principle Amount" variant="outlined" />


            </div>


            {/* interest */}

            <div className='input'>

              <TextField value={rate || ""}
                onChange={e => setRate(e.target.value)}
                className='outlined-basic' id="outlined-basic" label=" Rate of interest (p.a)%" variant="outlined" />


            </div>

            {/* year */}

            <div className='input'>

              <TextField value={year || ""}
                onChange={e => setyear(e.target.value)}
                className='outlined-basic' id="outlined-basic" label="Time period" variant="outlined" />


            </div>






          </div>

          {/* button */}

          <div className='btn-group'>

            {/* ṣtack */}
            <Stack direction="row" spacing={2}>
              <Button type='submit' className='btn' style={{ backgroundColor: 'black' }} variant="contained">Calculate</Button>
              <Button onClick={resetform} className='btn' variant="outlined">Reset</Button>

            </Stack>

          </div>




        </form>


      </div>


    </div>
  </>

);
}

export default App;
