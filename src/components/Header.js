import React from 'react'
import './Header.css'
import {AppBar, Toolbar,IconButton,Typography,Avatar} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
  return (
    <AppBar position='static' color='primary' className='theAppBar'>
      <Toolbar>
        <IconButton color='inherit'>
          <MenuIcon/>
        </IconButton>
        <Typography variant='h6' sx={{flexGrow:1}} textAlign='center'>
            Transylvania Codecamp
        </Typography>
        <Avatar src='https://randomuser.me/api/portraits/men/35.jpg' className='myAvatar' size='small'>
          
        </Avatar>
      </Toolbar>
    </AppBar>
  )
}
