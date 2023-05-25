import { url } from "./App";
import { useEffect } from "react";


const fetchData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

const GetTodo = (setTodos) => {

    useEffect(() => {
        fetchData().then(data => setTodos(data));
    }, [setTodos]);
}

export default GetTodo;