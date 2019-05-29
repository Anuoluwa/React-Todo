import React from 'react';
import uuid from 'uuid';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';


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
];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
        todosList: initialTodosList,
        todoTitle: '',
    }
};

changerHandler = (event) => {
  this.setState({ todoTitle: event.target.value});
}

addTodo = () => {
  const newTodo = {
      task: this.state.todoTitle,
      id: uuid(),
      completed: false,
  };

  const newTodosList = this.state.todosList.concat(newTodo);

  this.setState({
      todosList: newTodosList,
  })
}
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todo={this.state.todosList} />
        <TodoForm createTodo={this.addTodo} clickVal={this.changerHandler}/>
      </div>
    );
  }
}

export default App;
