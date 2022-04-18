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
         
<<<<<<< HEAD
        <Typography variant='h3' textAlign='center'  id='brand'>
        <IconButton  color='inherit' disableRipple disableTouchRipple disableFocusRipple> <SchoolTwoToneIcon sx={{fontSize:'2em'}} /></IconButton>Transylvania Codecamp
=======
        <Typography variant='h5' textAlign='center' sx={{fontFamily:'monospace',flexGrow:1}}>
        <IconButton  color='inherit' disableRipple disableTouchRipple disableFocusRipple> <SchoolTwoToneIcon sx={{fontSize:'1em'}} /></IconButton>Transylvania Codecamp
>>>>>>> a132fd96f42f5a25962107015c5e9ec2223f0ab8
    </Typography>
        <Avatar src='https://randomuser.me/api/portraits/men/35.jpg' className='myAvatar' size='small'>
        </Avatar>
      </Toolbar>
    </AppBar>
  )
}
