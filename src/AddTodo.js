import { Box, Input, Container, Button } from "@mui/material";
import { useState } from "react";
import { url } from "./App";

const postData = async (value) => {

    const data = { name: value };

    const res = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data) // 本体のデータ型は "Content-Type" ヘッダーと一致させる必要があります
    });

    const json = res.json();
    return json;
}

const AddTodo = ({ setTodos }) => {
    const [todo, setTodo] = useState('');

    const handleAddTodo = (event) => {
        setTodo(event.target.value);
    };

    const HandleSubmit = (event) => {
        event.preventDefault();
        if (todo.trim() === '') return;
        postData(todo).then(todo =>
            setTodos((todos) => [...todos, todo]));
        setTodo('');
    };


    return (
        <Container maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Box component="form" onSubmit={HandleSubmit} sx={{ mt: 1 }}>

                    <Input placeholder="追加" variant="outlined" color="primary" value={todo} onChange={handleAddTodo} />
                    <Button variant="contained" type="submit">送信</Button>
                </Box>

            </Box>
        </Container>
    )
}

export default AddTodo;