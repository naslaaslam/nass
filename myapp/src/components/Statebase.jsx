import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebase = () => {
    var [val, setval] = useState("Nass")
    var[name,setname]=useState()

    const handleinput = (e) => {
        setval(e.target.value)
        console.log(e.target.value)
    }
    const submit = () => {
        setname(val)
    }
  return (
      <div>
          <Typography variant="h3">🅦🅔🅛🅒🅞🅜🅔{name}</Typography><br></br>
          <TextField variant='outlined' label="enter your name" onChange={handleinput}/><br></br><br></br>
          <Button variant='contained' onclick={submit}>Submit</Button>
    </div>
  )
}

export default Statebase