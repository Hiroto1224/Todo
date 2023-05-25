import { Container, ListItem, List, ListSubheader, ListItemButton, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import Sheet from '@mui/joy/Sheet';
import { useEffect, useState } from "react";
import { useTheme } from '@mui/material/styles';
import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import postData from "./ChangeState";
import deleteData from "./DeleteTodo";

const url = 'https://todolist-team3.deno.dev/api/todo';

const fetchData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

const GetTodo = ({get,setGet}) => {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState({"id":"","name":"","state":""});
    const [c , setC] = useState([]);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    

  const handleClickOpen = (value) => {
    setOpen(true);
    setData(value);

  };

  const handleClose = () => {
    setOpen(false);
  };

  const stateChange = (value) => {
    console.log(value.id);
    const send = {id : value.id , name : value.name , state : (value.state === "done" ? "open" : "done")}
    postData(value.id,send.state);
    return send;
  }

  const handleChangeState = () =>{

    setGet((todo) => [...todo.map((obj) => (obj.id === data.id ? stateChange(obj) : obj))])
    
    setOpen(false);
  }

  const handleDelete = () => {
    deleteData(data.id);
    
    setGet((todo) => [...todo.filter((obj) => (obj.id !== data.id))])
    setOpen(false);
  }


    useEffect(() => {
        fetchData().then(data => setGet(data));
    },[]);

    return (
        <>
            <Container maxWidth="xs">
            <h2>Todos</h2>
            <Sheet
                variant="outlined"
                sx={{
                width: 320,
                maxHeight: 300,
                overflow: 'auto',
                borderRadius: 'sm',
                }}
            >
                <ListSubheader sticky></ListSubheader>
                    <List>
                    {get.map(todo => (    
                    <ListItem key={todo.id}>
                    <ListItemButton onClick={()=>handleClickOpen(todo)}>{todo.name}</ListItemButton>
                    
                    </ListItem>
                    ))}
                    </List>
                </Sheet>
                <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id={data.id}>
          {data.name}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <p> TodoName : {data.name}</p>
            <p> TodoState : {data.state}</p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleChangeState}>
            StateChange
          </Button>
          <Button onClick={handleDelete} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
            </Container>
        </>
    )
    
}

export default GetTodo;