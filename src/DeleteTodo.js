

const url = 'https://todolist-team3.deno.dev/api/todo/';
const deleteData = async (id) => {
    await fetch(url+id, {
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    }).then(response => {
        if(!response.ok) {
            console.log('error!');
        }
        console.log('ok!');
        return response.json();
    }).then((data)  => {
        console.log(data);
    }).catch((error) => {
        console.log(error);
    });
}


export default deleteData;