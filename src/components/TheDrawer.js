import React from 'react'
import {Drawer,Box,Typography,IconButton,Divider,List,ListItem,ListItemButton} from '@mui/material'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import data from '../javatopics'
import './TheDrawer.css'






export default function TheDrawer() {

  const [isDrawerOpen,setIsDrawerOpen] = useState(false)
  const topicItems = data.map((listItem)=> {

      return(
        <>
         <ListItemButton>
            <ListItem>
          <Typography variant='subtitle1'>
            {listItem}
          </Typography>
        </ListItem>
        </ListItemButton>
        <Divider/>
        </>
       
      )

  })

  return (
    <React.Fragment>
      <IconButton size='large' edge='start' color='inherit' aria-label='logo' onClick={()=>{setIsDrawerOpen(true)}}>
        <MenuIcon/>
      </IconButton>
    <Drawer anchor='left'  open={isDrawerOpen} onClose={()=>setIsDrawerOpen(false)}>
          <Box p={2} className='drawerBox'  textAlign='center' role='presentation'>
              <Typography variant='h6'>
                  Topics Panel
              </Typography>
              <List>
                {topicItems}
              </List>
              
          </Box>
    </Drawer>
    </React.Fragment>
  )
}
