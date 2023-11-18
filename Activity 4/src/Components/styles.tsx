import React from 'react'
import {createTheme } from '@mui/material/styles';
import {AppBar,Toolbar,Button,IconButton,TextField,Typography,Stack} from '@mui/material'
import CottageIcon from '@mui/icons-material/Cottage';
export default function styles() {
  return (
    <div>
      <AppBar color='info'>
         <Toolbar>
            <IconButton>
                <CottageIcon/>
            </IconButton>
            <Typography variant='h5' sx={{flexGrow:1}}>Cottage</Typography>
            <Stack direction='row' spacing={3}>
                <Button variant='outlined' color='inherit'>Home</Button>
                <Button variant='text' color='inherit'>About</Button>
                <Button variant='text' color='inherit'>Service</Button>
                <Button variant='contained' color='success'>Contact</Button>
            </Stack>
        </Toolbar>
      </AppBar>
        <TextField variant='outlined' label='Name' color='error' size='small'></TextField>
        <TextField variant='filled' label='Name'></TextField>
        <TextField variant='standard' label='Name'></TextField>
    </div>
  )
}