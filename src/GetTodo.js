import { url } from "./App";
import { useEffect } from "react";


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