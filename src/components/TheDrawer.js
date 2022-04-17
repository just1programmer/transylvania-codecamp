import React from 'react'
import {Drawer,Box,Typography,IconButton} from '@mui/material'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';

import data from '../javatopics'

export default function TheDrawer() {

  const [isDrawerOpen,setIsDrawerOpen] = useState(false)
  const topicItems = data.map((listItem)=> {



  })
  return (
    <React.Fragment>
      <IconButton size='large' edge='start' color='inherit' aria-label='logo' onClick={()=>{setIsDrawerOpen(true)}}>
        <MenuIcon/>
      </IconButton>
    <Drawer anchor='left' open={isDrawerOpen} onClose={()=>setIsDrawerOpen(false)}>
          <Box p={2} width='250px' textAlign='center' role='presentation'>
              <Typography variant='h6'>
                  Topics Panel
              </Typography>
            
          </Box>
    </Drawer>
    </React.Fragment>
  )
}
