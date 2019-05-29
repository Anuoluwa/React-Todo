import React, { Component } from 'react';

function TodoForm (props){
        return (
            <div>
                <input
                    onChange={props.clickVal}
                    type="text"
            />
            <button onClick={() => props.createTodo()}>Add Todo</button>
            <button>clear completed</button>
            </div>
        )
}

export default TodoForm;