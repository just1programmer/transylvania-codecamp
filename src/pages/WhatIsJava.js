import React from 'react'
import {Stack,Paper, Typography,IconButton,Card,CardMedia,CardContent,Divider} from '@mui/material'
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import { Box } from '@mui/system';
import './WhatIsJava.css'
export default function WhatIsJava() {
  return (
    <Stack spacing={1} sx={{padding:'5vw'}}>

    
    <Typography variant='h2'>
      Java Introduction☕
    </Typography>

<Paper elevation={1} sx={{minHeight:'60vh',maxWidth:'90vw',padding:'3vw'}}>

    
        

        <Stack direction='row' sx={{marginTop:'5vh',justifyContent:'space-evenly'}}>

          <Card className='theCard'>
            <CardMedia
            component='img'
            image='https://media3.giphy.com/media/fwbZnTftCXVocKzfxR/200.webp?cid=ecf05e475l50emwlnh7nk9g0uzmo42w0phb71w94d4wfmb6m&rid=200.webp&ct=g'
            />
            <CardContent>

              <Typography variant='h5' textAlign='center'>
              Java ☕
              </Typography>
              <Divider/>
            <Typography variant="body2" color="initial" p={2}>
        <b>A high-level, class-based, object-oriented programming language </b>  that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers <b>'write once, run anywhere'</b>. 

        </Typography>
            </CardContent>
          </Card>

          <Card className='theCard'>
          <CardMedia
            component='img'
            image='https://media0.giphy.com/media/V4NSR1NG2p0KeJJyr5/giphy.gif'
            height='250'
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'> 
              Compilation 😓
              </Typography>
              <Divider/>
            <Typography variant="body2" color="initial" p={2} >
           <b>Compiled Java code can run on all platforms that support Java without the need to recompile. </b> 

            Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of the underlying computer architecture.

        </Typography>
            </CardContent>
          </Card>


          <Card className='theCard'>
          <CardMedia
            component='img'
            image='https://media0.giphy.com/media/h408T6Y5GfmXBKW62l/200.webp?cid=ecf05e47z8x89zcfkyelxl8voqwdx45id2w4y25qaufxfccf&rid=200.webp&ct=g'
            height='250'
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'>
              Popularity❤️‍🔥 
              </Typography>
              <Divider/>
            <Typography variant="body2" color="initial" p={2}>
            <b>As of 2019, Java was one of the most popular programming languages in use according to GitHub</b>, particularly for client–server web applications, with a reported 9 million developers.

            The syntax of Java is similar to C and C++, but has fewer low-level facilities than either of them.

        </Typography>
            </CardContent>
          </Card>

        </Stack>
        
       
   
        
      
   

</Paper>
</Stack>
  )
}
