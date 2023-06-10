import { Grid, Typography } from '@mui/material'
import { Form } from './Form';

// Solo en vite

export const Users = () => {
  return (
    <Grid container sx={{justifyContent:'center',marginTop:8}}>  
      <Form/>
    </Grid>
  )
}

{/* <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Password</TableCell>
                <TableCell>Opciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                users.map( (user) =>( 
                  <TableRow key={user._id}>
                    <TableCell >{user.name}</TableCell>
                    <TableCell >{user.email}</TableCell>
                    <TableCell >{user.password}</TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </TableContainer> */}