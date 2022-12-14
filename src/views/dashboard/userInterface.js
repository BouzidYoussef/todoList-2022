import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card, Form} from "react-bootstrap";
import "./style.css";
import Select from 'react-select';
import { FormControl } from 'react-bootstrap';


function Todo ({todo, removeTodo, i}){

    return(
        <div className='todo'>
            <span >{todo.text}</span>
            <h3>New task:</h3>
            <div>
            <FormControl type="checkbox" class="required-entry"/>
            <label class="label">
            <Button type="button" class="action action-show" />
            </label>
            <Button disabled onClick={() => removeTodo(i)}>Remove</Button>
            </div>
        </div>
    )
}
       function FormTodo({ addTodo }) {
        const [value, setValue] = React.useState("");
        
        const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
        };

        return (
          <Form onSubmit={handleSubmit}> 
          <Form.Group>
            <Form.Label><b>Add Todo</b></Form.Label>
            <Select className="choices"  placeholder="user" options={Option} />
            <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Type your task" />
          </Form.Group>
          <Button variant="primary mb-3" type="submit">
            Submit
          </Button>
        </Form>
        );
      }

function userInterface() {
    const [todos, setTodos] = React.useState([]);

      const addTodo = text =>{
        const newTodos = [...todos, { text }];
        setTodos(newTodos)
      }

      const markTodo = i => {
        const newTodos = [...todos];
        newTodos[i].isDone = true;
        setTodos(newTodos);
      };

      const removeTodo = i =>{
        const newTodos = [...todos];
        newTodos.splice(i, 1);
        setTodos(newTodos)
      };
  return (
    <div className='todoList'>
        <div className='container'>
            <FormTodo addTodo={addTodo} />
            <div>
                {todos.map((todo, i) =>(
                    <Card>
                        <Card.Body>
                            <Todo
                            key={i}
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


        export default userInterface;

