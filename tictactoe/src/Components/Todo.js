import { useEffect, useRef, useState } from "react";

export const Todo = () => {
  const [todoData, setTodoData] = useState([]);
  const [id, setId] = useState();
  const [toggle,setToggle] = useState(false);
  const todoref = useRef();

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((data) => setTodoData(data.todos));
  }, []);

  const addTask = () => {
    const newData = {
      completed: false,
      id: todoData.length + 1,
      todo: todoref.current.value,
    };
    setTodoData([newData, ...todoData]);
  };

  const handleId = (e) => {
    e.preventDefault();      
    setId(e.target.id);
  };

//   const handleEdit =(e)=>{
//     e.preventDefault();      
//   }

  return (
    <>
      <h1>Todo Application</h1>
      <input type="text" ref={todoref} />
      <button onClick={addTask}>Add</button>
      <button onClick={()=>setToggle(true)}>{toggle?"View":"Edit"}</button>
      <ul>
      <ul>
        {todoData.map((data) => (
          <li key={data.id} onClick={(e) => handleId(e)} id={data.id}>
            {id == data.id && toggle ? (
              <input type="text" value={data.todo} />
            ) : (
              data.todo
            )}
          </li>
        ))}
      </ul>
      </ul>
    </>
  );
};
