import { Button, Grid, TextField, Typography } from '@mui/material'
import { useForm } from '../Hooks/useForm'
import { useFetchCreateUser, useFetchUpdate } from '../helpers/useFetch';


export const Form = ({getUsers, data,handleClose}) => {

    const {name, email, password, onInputChange, onResetForm} = useForm({
        'name':data ? data.name:'',
        'email':data ? data.email:'',
        'password':data ? data.password:''
      })
    
    const handleSubmit = async(e) => {
        e.preventDefault()
        if(!data){
            const res = await useFetchCreateUser(name, email, password)
            onResetForm()    
        }else{
            const res = await useFetchUpdate({id:data._id ,name, email, password})  
        }
        handleClose()
        await getUsers()
    }


  return (
    <Grid item xs={12} sm={6} md={4} p={2} sx={{border:1, borderRadius:2, borderColor:'#1c2833',maxWidth:400}} > 
        <Typography variant='h5' textAlign={'center'}>{ data ? 'Editar Usuario':'Crear Usuario'}</Typography>
        <form onSubmit={handleSubmit} >
          <Grid container>
            <Grid item xs={12} sx={{mt:1}}>
              <TextField 
                focused={data && true}
                onChange={onInputChange} 
                value={name} 
                name='name' 
                color='tercero' 
                label='username' 
                type='text' 
                size='small' 
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sx={{mt:3}}>
              <TextField 
                focused={data && true}
                onChange={onInputChange}
                value={email} 
                name='email' 
                color='tercero' 
                label='email' 
                type='email' 
                size='small' 
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sx={{mt:3}}>
              <TextField 
                focused={data && true}
                onChange={onInputChange} 
                value={password} 
                name='password' 
                color='tercero' 
                label='password' 
                type='password' 
                size='small' 
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid sx={{mt:2}}> 
            <Button
              variant='contained' 
              fullWidth 
              color='tercero' 
              type='submit'
            >
              <Typography color={'secondary'}>{ data ? 'Actualizar usuario':'Crear usuario'}</Typography>
            </Button>
          </Grid>
        </form>
    </Grid>
  )
}
