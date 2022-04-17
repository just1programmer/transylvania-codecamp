import React from 'react'
import './Header.css'
import {AppBar, Toolbar,Typography,Avatar,IconButton} from '@mui/material'
import TheDrawer from './TheDrawer'
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';


export default function Header() {
  return (
    <AppBar position='fixed' color='primary' className='theAppBar'>
      <Toolbar>
        <TheDrawer/>
         
        <Typography variant='h6' sx={{flexGrow:1}} textAlign='center'>
        <IconButton  color='inherit' disableRipple href='/'>
            <SchoolTwoToneIcon sx={{fontSize:'60px'}}/>
         </IconButton>
            Transylvania Codecamp  
        </Typography>
        <Avatar src='https://randomuser.me/api/portraits/men/35.jpg' className='myAvatar' size='small'>
        </Avatar>
      </Toolbar>
    </AppBar>
  )
}
