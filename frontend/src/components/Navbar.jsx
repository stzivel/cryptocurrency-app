import React from 'react'
import { Stack, Typography } from "@mui/material";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <Stack direction='row' alignItems='center' p={2} sx={{background: '#000', display:'flex', justifyContent:'center'
    }}>

        <Link to='/' style={{textDecoration:'none'}}  >
        <Typography variant='h4' color='#ffff' fontWeight='bold' style={{color: '#0cbaba', letterSpacing:'0.3rem'}}>CRYPTOCURRENCY</Typography>
        </Link>

        

    </Stack>
  )
}

export default Navbar