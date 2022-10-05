import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card, Form} from "react-bootstrap";
import "./style.css";
import Select from 'react-select';

var option = [
  { value: 'youssef', label: 'Youssef', key:1 },
  { value: 'ahmed', label: 'Ahmed', key:2 },
  { value: 'mohammed', label: 'Mohammed', key:3}
]


function Todo ({todo, removeTodo, markTodo, i, user}){

    return(
        <div className='todo'>
                <p key={todo.key}>{user.n}</p> 
            <span  key={todo.key}>{todo.text}</span>      
            <div>
            <Button onClick={() => markTodo(i)}>Done</Button>{' '}
            <Button onClick={() => removeTodo(i)}>Remove</Button>
            </div>
        </div>
    )
}
   function FormTodo({ addTodo, addUser }) {

        

  const [value, setValue ] = React.useState("");
  const [choice, setChoice ] = React.useState("");


        const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
        
        };

        var isChange = e => {
          e.preventDefault();
          if(!choice) return;
          addUser(choice);
          setChoice("");
        };

        return (
          <Form onSubmit={handleSubmit}> 
          <Form.Group>
            <Form.Label><b>Add Todo</b></Form.Label>
            <Select className="choices" options={option} onClick={e => isChange(e.target.choice)}
              />          
              <Form.Control type="text" className="input" key={option.key} value={value} onChange={e => setValue(e.target.value)} placeholder="Type your task" />
          </Form.Group>
          <Button variant="primary mb-3" type="submit" >
            Submit
          </Button>
        </Form>
        );
      }

function Todos() {

 
    const addUser = n =>{
      const newUsers = [...users, { n }]
      setUsers(newUsers);
    }

    const [todos, setTodos] = React.useState([]);
    const [users, setUsers] = React.useState([])
      
    
        const addTodo = text =>{
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
      }

      const markTodo = i => {
        const newTodos = [...todos];
        newTodos[i].isDone = true;
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
            <FormTodo addTodo={addTodo} addUser={addUser} />
            <div>
                {todos.map((todo, i, user) =>(
                    <Card>
                        <Card.Body>
                            <Todo
                            user={user}
                            i = {i}
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


        export default Todos