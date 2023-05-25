



const url = 'https://todolist-team3.deno.dev/api/todo/';
const postData = async (id, value) => {

    const data = { state: value };

    await fetch(url + id, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data) // 本体のデータ型は "Content-Type" ヘッダーと一致させる必要があります
    }).then(response => {
        if (!response.ok) {
            console.log('error!');
        }
        console.log('ok!');
        return response.json();
    }).then((data) => {
        console.log(data);
    }).catch((error) => {
        console.log(error);
    });
}


export default postData;