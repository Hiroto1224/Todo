import { useState } from "react";


export default function Myinput(){
    const [text,setText] = useState('hello');

    function handleChange(e){
        setText(e.target.value);
    }
    return (
        <>
          <input value={text} onChange={handleChange} />
          <p>you typed: {text}</p>
          <button onClick={() => setText('hello')}>
            reset
          </button>

        </>
    )
}