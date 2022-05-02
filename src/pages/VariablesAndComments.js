import React,{useState} from 'react'
import {Stack,Paper, Typography,IconButton,Card,CardMedia,CardContent,Divider,Grid} from '@mui/material'
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import { Box } from '@mui/system';
import './CardAndVideo.css'
import './variablesAndQuestions.css'
import ReactPlayer from 'react-player';
import SingleQuestion from './accordionQuestions/variablesQuestion';

import data from './accordionQuestions/variablesQuestions'

console.log(data);

export default function VariablesAndComments() {
  const [variablesQuestions,setQuestions]=useState(data)
  return (
    <Stack spacing={1} sx={{padding:'5vw'}}>

    
    <Typography variant='h2' id='title'>
      Java Variables and Comments☕
    </Typography>

<Paper elevation={4} sx={{minHeight:'60vh',maxWidth:'90vw',padding:'3vw'}}>

    
        

        <Grid container spacing={2} p={2} my={10}>
            <Grid item xs={12} sm={12} md={6} lg={4}>

            <Card className='theCard'>
            <CardMedia
            component='img'
            image='https://hamedd19cs3.files.wordpress.com/2016/01/addition_code.gif?w=1000&h='
            />
            <CardContent>

              <Typography variant='h5' textAlign='center'>
              Variables 🤔
              </Typography>
              <Divider/>
            <Typography variant="body2" color="initial" className='details'>
        <b> A variable is a placeholder for a value. </b> <br/> It behaves as the value it contains.
        We can store numbers, words,boolean values ( true or false).  

        </Typography>
            </CardContent>
          </Card>
            </Grid>
         
            <Grid item xs={12} sm={12} md={6} lg={4}>
          <Card className='theCard'>
          <CardMedia
            component='img'
            image='data:image/png;base64,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'
            height='200'
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'> 
              Data Types 😅
              </Typography>
              <Divider/>
            <Typography variant="body2" color="initial" className='details' >
           <b> If we are going to store a value within a variable, we have to list the data type of what we are going to  store within that variable. </b> 

            

        </Typography>
            </CardContent>
          </Card>

          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={4}>
          <Card className='theCard' >
          <CardMedia
            component='img'
            image='https://thumbs.gfycat.com/DifficultLimpingBubblefish-max-1mb.gif'
            height='250'
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'>
              Most basic data types❤️‍🔥 
              </Typography>
              <Divider/>
            <Typography variant="body2" color="initial"  className='details'>
            <b>The most basic, and most used data types are:</b>boolean,int,double,char,String,Array .
  
        </Typography>
            </CardContent>
          </Card>
          </Grid>
       
          </Grid>
       
        
          <div className='container'>
        <Typography variant='h3'>Q&A about Variables</Typography>
        <section className='info'>
          {variablesQuestions.map((question)=>{
            return(
              <SingleQuestion key={question.id} {...question}/>
            )
          })}
        </section>
      </div>



<ReactPlayer 
width='100%'
height='700px'
url='https://www.youtube.com/watch?v=DbVR0OG3J54&ab_channel=TutorialsPoint%28India%29Ltd.'
controls={true}
/>
        
      



<Grid container spacing={2} p={2} my={10}>
            <Grid item xs={12} sm={12} md={6} lg={4}>

            <Card className='theCard'>
            <CardMedia
            component='img'
            image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX5Rj-STat3Pb7s7NRqBmLvmK0hp8O0OqF0g&usqp=CAU'
            />
            <CardContent>

              <Typography variant='h5' textAlign='center'>
              Java Comments😬
              </Typography>
              <Divider/>
            <Typography variant="body2" color="initial" className='details'>
        <b> The Java comments are the statements in a program that are not executed by the compiler and interpreter.</b> <br/> 
        </Typography>
            </CardContent>
          </Card>
            </Grid>
         
            <Grid item xs={12} sm={12} md={6} lg={4}>
          <Card className='theCard'>
          <CardMedia
            component='img'
            image='https://media.geeksforgeeks.org/wp-content/cdn-uploads/20191113114930/Comments.png'
            height='300px'
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'> 
              Single Line Comment 
              </Typography>
              <Divider/>
            <Typography variant="body2" color="initial" className='details' >
           <b> The single-line comment is used to comment only one line of the code. It is the widely used and easiest way of commenting the statements.

Single line comments starts with two forward slashes (//). Any text in front of // is not executed by Java.</b> 

            

        </Typography>
            </CardContent>
          </Card>

          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={4}>
          <Card className='theCard' >
          <CardMedia
            component='img'
            image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc3h2wqq0eC3pFN_wVA4cmWfklKxl71y19zg&usqp=CAU'
            height='250'
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'>
              Multi line comment😄
              </Typography>
              <Divider/>
            <Typography variant="body2" color="initial"  className='details'>
            <b>The multi-line comment is used to comment multiple lines of code. It can be used to explain a complex code snippet or to comment multiple lines of code at a time (as it will be difficult to use single-line comments there).

Multi-line comments are placed between /* and */. Any text between /* and */ is not executed by Java.</b>
  
        </Typography>
            </CardContent>
          </Card>
          </Grid>
       
          </Grid>





          <ReactPlayer 
width='100%'
height='700px'
url='https://www.youtube.com/watch?v=yxIAXB1wk7w&ab_channel=AlexLee'
controls={true}
/>
        







</Paper>
</Stack>
  )
}
