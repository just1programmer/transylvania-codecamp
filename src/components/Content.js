import React from 'react'
import {Stack,Paper, Typography} from '@mui/material'

export default function Content() {
  return (
      <React.Fragment>
        <Stack>
            <p>item1</p>
            <Paper elevation={5}>
                <Typography variant="h1" color="initial">Helo</Typography>
            </Paper>
        </Stack>
      </React.Fragment>
  )
}
