
import { useEffect } from "react";


const url = 'https://todolist-team3.deno.dev/api/todo';

const fetchData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

const GetTodo = (setGet) => {

    useEffect(() => {
        fetchData().then(data => setGet(data));
    }, [setGet]);
}

export default GetTodo;