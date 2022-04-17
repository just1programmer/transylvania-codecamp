import React from 'react'
import './Footer.css'
import {AppBar,Toolbar,IconButton,Typography} from '@mui/material'
import CopyrightIcon from '@mui/icons-material/Copyright';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import ShareIcon from '@mui/icons-material/Share';
export default function Footer() {
  return (
<AppBar position='static' color='primary' className='footer'>
      <Toolbar>
        <IconButton color='inherit'>
          <CopyrightIcon/>
        </IconButton>
        <Typography variant='h6' sx={{flexGrow:1}}>
           Copyright 2022 Transylvania Codecamp
        </Typography>
        <IconButton color='inherit'>
          <FacebookIcon/>
        </IconButton>
        <IconButton color='inherit'>
          <InstagramIcon/>
        </IconButton>
        <IconButton color='inherit'>
          <ShareIcon/>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
