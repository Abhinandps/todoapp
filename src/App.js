
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import close from "./close.svg"

function App() {

  const [list, setList] = useState(()=>{
    const initialValue = JSON.parse(localStorage.getItem("list") || "[]");
    return initialValue;
  });

  const [text, setText] = useState("")

  

  useEffect(()=>{
    localStorage.setItem("list",JSON.stringify(list))
  },[list])
  

  const addToList = () => {
    if (!text) return
    setList([...list, {
      text: text,
      status: false
    }])
    setText("");
  }


  const deleteList = (index) => {
    // console.log(list.filter((_todo,i)=> i !== index ));
    setList(list.filter((_todo, i) => i !== index));
  }


  const changeStatus = (index) => {
    setList(list.map((todo, i) =>
      i === index ?
        {
          ...todo,
          status: !todo.status
        }
        : todo
    ))
  }



  return (
    <div className="App">
      <div className="title">
        <h2>My Tasks</h2>
      </div>

      <div className="input-box">
        <input
          type="text"
          placeholder='Add new task'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={addToList}>Add</button>
      </div>

      <div className="task-list">
        {list.map((data, i) => {
          return (
            <div key={i}
              className={data.status ? "task deactive" : "task"}
              onClick={() => changeStatus(i)}
            >
              <p>{data.text}</p>
              <img
                onClick={(e) => {
                  e.stopPropagation()
                  deleteList(i)
                }
                } src={close} alt="" />
            </div>
          )
        })}
      </div>


    </div>
  );
}

export default App;
