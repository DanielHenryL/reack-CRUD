
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='tercero'>
        <Toolbar>
          <Typography variant="body2" sx={{ marginRight: '30px' }}>
            <Link type='button' to={'/about'} ><Button color='secondary'>about</Button></Link>
          </Typography>
          <Typography variant="body2" sx={{ marginRight: '30px' }} >
            <Link to={'/users/create/'} > <Button color='secondary'>crear users</Button> </Link>
          </Typography>
          <Typography variant="body2"  sx={{ flexGrow: 1 }}>
            <Link to={'/users/list/'} > <Button color='secondary'>listar</Button> </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}