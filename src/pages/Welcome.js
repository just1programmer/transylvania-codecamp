import React from 'react'
import {Stack,Paper, Typography,IconButton} from '@mui/material'
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
export default function Welcome() {
  return (
    <Stack spacing={1} sx={{padding:'5vw'}}>
    <Typography variant='h3' textAlign='center'>
          Welcome to <IconButton  color='inherit' disableRipple disableTouchRipple disableFocusRipple> <SchoolTwoToneIcon sx={{fontSize:'3em'}} /></IconButton>Transylvania Codecamp
    </Typography>
<Paper elevation={10} sx={{minHeight:'60vh',maxWidth:'90vw',padding:'3vw'}}>
    <Typography variant="h6" color="initial">ur core Java programming tutorial is designed for students and working professionals. Java is an object-oriented, class-based, concurrent, secured and general-purpose computer-programming language. It is a widely used robust technology.

</Typography>

</Paper>
</Stack>
  )
}
