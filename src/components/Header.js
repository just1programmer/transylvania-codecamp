import React from 'react'

import {AppBar, Toolbar,IconButton,Typography,Avatar} from '@mui/material'


export default function Header() {
  return (
    <AppBar position='static' color='primary'>
      <Toolbar>
        <IconButton>

        </IconButton>
        <Typography variant='h5'>
            Transylvania Codecamp
        </Typography>
        <Avatar>
          OS
        </Avatar>
      </Toolbar>
    </AppBar>
  )
}
