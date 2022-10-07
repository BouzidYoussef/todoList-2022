import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card, Form} from "react-bootstrap";
import "./style.css";
import Select from 'react-select';
import  { useState } from 'react';
import { v4 } from 'uuid'

var ud = v4();

var option = [
  { value: 'youssef', label: 'Youssef', key:1 },
  { value: 'ahmed', label: 'Ahmed', key:2 },
  { value: 'mohammed', label: 'Mohammed', key:3},
  { value: 'anis', label: 'Anis', key:4},
  { value: 'louay', label: 'Louay', key:5},
  { value: 'kais', label: 'Kais', key:6}
]

function Todo ({todo, removeTodo, markTodo, i}){
          console.log(ud);

    return(
        <div className='todo'>
          
                <li className='userin' key={ud}>Task for : {todo.x}</li>   
               <span key={ud} contenteditable="true" onDoubleClick={e => editTask(item.id, e.currentTarget.textContent)}>-{todo.text}</span>
            <div>
            <Button onClick={() => markTodo(i)}>Done</Button>{' '}
            <Button onClick={() => removeTodo(i)}>Remove</Button>
            </div>
        </div>
    )
}
   function FormTodo({ addTodo}) {
  
  
  
  const [value, setValue] = useState("");
        const handleSubmit = e => {
        e.preventDefault();
        console.log("show slected: "+selected)
        console.log("show value: "+value)
        if (!value) return;
         addTodo(value, selected);
        setValue("");
        };





        const [selected, setSelected] = useState();
        const handleChange = (event) => {
          console.log(event)
          setSelected(event);
        };

        return (
          <Form onSubmit={handleSubmit}> 
          <Form.Group>
            <Form.Label className='title-item'><b>Add Todo</b></Form.Label>
            <Select className="choices" options={option} onChange={(choise) => handleChange(choise.label)}/>
              <Form.Control type="text" className="input" key={ud} value={value} onChange={e => setValue(e.target.value)} placeholder="Type your task" />
          </Form.Group>
          <Button variant="primary mb-3" type="submit" > 
            Submit 
          </Button>
        </Form>
        );
      } 

function Todos() {

        const [todos, setTodos] = React.useState([]);
      
        const addTodo = (text, x) =>{
        const newTodos = [...todos, { text, x }];
        setTodos(newTodos);
      }

        const markTodo = ud => {
        const newTodos = [...todos];
        newTodos[ud].isDone = true;
        setTodos(newTodos);
      };

        const removeTodo = i =>{
        const newTodos = [...todos];
        newTodos.splice(i, 1);
        setTodos(newTodos);
      };

  return (
    <div className='todoList'>
        <div className='container'>
            <FormTodo addTodo={addTodo} />
            <div>
                {todos.map((todo, ud) =>(
                    <Card>
                        <Card.Body>
                            <Todo
                            key={ud}
                            ud = {ud}
                            todo={todo}
                            markTodo={markTodo}
                            removeTodo={removeTodo}
                            />
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>

    </div>
  )
}


        export default Todos;