import {
    Container, ListItem, List, ListSubheader, ListItemButton,
    Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle
} from "@mui/material";
import Sheet from '@mui/joy/Sheet';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import postData from "./ChangeState";
import deleteData from "./DeleteTodo";
import { useState } from "react";
import GetTodo from "./GetTodo";
import AddTodo from "./AddTodo";

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [open, setOpen] = useState(false);
    const [data, setData] = useState({ id: undefined, name: undefined, state: undefined });
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    GetTodo(setTodos);

    const handleClickOpen = (value) => {
        setOpen(true);
        setData(value);

    };

    const handleClose = () => {
        setOpen(false);
    };

    const stateChange = (value) => {
        console.log(value.id);
        const send = { id: value.id, name: value.name, state: (value.state === "done" ? "open" : "done") }
        postData(value.id, send.state);
        return send;
    }

    const handleChangeState = () => {

        setTodos((todo) => todo.map((obj) => (obj.id === data.id ? stateChange(obj) : obj)))

        setOpen(false);
    }

    const handleDelete = () => {
        deleteData(data.id);

        setTodos((todo) => todo.filter((obj) => (obj.id !== data.id)))
        setOpen(false);
    }



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
                    <ListSubheader></ListSubheader>
                    <List>
                        {todos.map(todo => (
                            <ListItem key={todo.id}>
                                <ListItemButton onClick={() => handleClickOpen(todo)}>{todo.name}</ListItemButton>

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
            <AddTodo setTodos={setTodos} />
        </>

    )

}


export default Todo;