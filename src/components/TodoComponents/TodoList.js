// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React, { Component } from 'react';

const initialTodosList =  [
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    },
    {
        task: 'Piano Class',
        id: 1528817084358,
        completed: false
      }
  ];
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          todosList: initialTodosList,
        };
      }

      render() {
          return (
              <div>
                  {
                      this.state.todosList.map(todoObj => {
                          return  (
                              <div key="{todoObj}">{todoObj.task}</div>
                          )
                      })
                  }
              </div>
          )
      }

}

export default TodoList;