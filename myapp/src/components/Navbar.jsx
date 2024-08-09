import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">myapp</Typography>
          <Link to='/l'>
            <Button variant='contained'>Login</Button>
          </Link>
          <Link to='/signup'>
            <Button variant='contained'>signup</Button>
          </Link>
          <Link to='/nas'>
            <Button variant='contained'>pong</Button>
          </Link>
         <Link to='/Rec'>
            <Button variant='contained'>welcome</Button>
          </Link>
          <Link to='/a'>
            <Button variant='contained'>Marboos</Button>
          </Link>
          
          
        </Toolbar>
      </AppBar>
      <br></br><br></br>
    </div>
  )
}

export default Navbar