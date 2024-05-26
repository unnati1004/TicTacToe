import { useState } from "react"

const Todo = ()=>{
   const [todoData,setTodoData] = useState([]);
          
   return (
          <>
            <h1>Todo Application</h1>
            <input type="text"/>
            <button>Add</button>

          </>
   )       
}