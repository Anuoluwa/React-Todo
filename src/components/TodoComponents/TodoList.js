// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
function TodoList (props) {
          return (
              <div>
                  {
                      props.todo.map((todoObj) => {
                          console.log(todoObj);
                          return  (<div key="{todoObj}">{todoObj.task}</div>)
                      })
                  }
              </div>
          )
}

export default TodoList;