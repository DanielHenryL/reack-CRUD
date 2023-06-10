import { DataGrid, GridActionsCellItem, GridToolbar, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import { useCallback, useEffect, useMemo, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box , Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import Modal from '@mui/material/Modal';
import { Form } from './Form';
import { useFetchDelete, useFetchGetUser, useFetchGetUsers } from '../helpers/useFetch';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth:300,
  bgcolor: 'background.paper',
  borderRadius:5,
  // border: '2px solid #000',
  boxShadow: 24,
  p: 3,
  
};
export const ListUser = () => {

  const [users, setUsers] = useState([])
  const [open, setOpen] = useState(false)
  const [data, setIdData] = useState()

  const CustomToolbar = () =>{
      return (
        <GridToolbarContainer>
          <GridToolbarExport printOptions={{ disableToolbarButton: true }} />
        </GridToolbarContainer>
      );
  }

  const onDelete = useCallback(
    (id) => () => {
      setTimeout( async() => {
        await useFetchDelete(id)
        await getUsers()
      });
    },
    [],
  )
  const handleClose = () => setOpen(false);
  
  const onEdit = useCallback(
    (id, params) => () => {
      setTimeout(async() => {
        const data = await useFetchGetUser(id)
        setIdData(data)
        setOpen(true)
      });
    },
    [],
  )
  const getUsers = async() => {
    const data = await useFetchGetUsers()
    setUsers(data)
  }
  useEffect(() => {
    getUsers()
  }, [])


  const columns = useMemo(
    () => [
      {
        field: 'name',
        type:'string',
        headerName: 'Name',
      //   width: 200,
        minWidth: 100,
        flex: 1,
        // editable: true,
      },
      {
        field: 'email',
        type:'email',
        headerName: 'Email',
        flex: 1,
        minWidth: 200,
      //   width: 200,
        // editable: true,
      },
      {
        field: 'password',
        type:'password',
        headerName: 'Password',
        flex: 1,
        minWidth: 150,
      //   width: 200,
        // editable: true,
      },
      {
        field: 'actions',
        headerName: 'Opciones',
        type: 'actions',
        flex: 1,
        minWidth: 150,
        getActions: (params) => [
          <GridActionsCellItem
            icon={<DeleteIcon color='error'/>}
            label="Delete"
            onClick={onDelete(params.id)}
          />,
          <GridActionsCellItem
            icon={<EditIcon color='secondary' />}
            label="Update"
            onClick={onEdit(params.id, params.row)}
          />,
        ],
      },
    ], 
    [onDelete, onEdit],
  );
    return (
      <>
      
      
        <Box sx={{ justifySelf:'center'}}>
            <Typography variant='h4'>Lista de usuarios</Typography>
            <br />
            <DataGrid
              getRowId={(rowsss)=>rowsss._id}
              rows={users}
              columns={columns}
              initialState={{
                  pagination: {
                      paginationModel: { page: 0, pageSize: 10 },
                  },
              }}
              pageSizeOptions={[10, 15]}
              
              // rowHeight={40}
              checkboxSelection
              disableRowSelectionOnClick
              slots={{
                  toolbar: CustomToolbar,
              }}
            />
        </Box>
            
        <Modal
          open={open}
          onClose={handleClose}
        >
          <Box sx={style}>
            <Form getUsers={getUsers} data={data} handleClose={handleClose}/>
          </Box>
        </Modal>
           
      </>
    )
}
