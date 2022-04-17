import React from 'react'
import './Footer.css'
import {AppBar,Toolbar,IconButton,Typography} from '@mui/material'


export default function Footer() {
  return (
<AppBar position='static' color='primary' className='footer'>
      <Toolbar>
        <IconButton color='inherit'>
          
        </IconButton>
        <Typography variant='h6' sx={{flexGrow:1}} textAlign='center'>
            Transylvania Codecamp
        </Typography>
      
      </Toolbar>
    </AppBar>
  )
}
