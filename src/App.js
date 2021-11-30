import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';




class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: [
          {
            task: 'Organize Garage',
            id: 1528817077286,
            completed: false
          },
          {
            task: 'Bake Cookies',
            id: 1528817084358,
            completed: false
          }
      ]
    }
  }

  handleAdd = (task) => {
    //1. setState
    //2. change todos
    //3. Make a copy todos
    //4 Add a new todo to the end of our todo list.

    const newTodo = {
      task: task,
      id: Date.now(),
      completed: false
    }

    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo] //the reason why THIS is an array vs the one in handle clear is because the state has to be the same coming in as it is coming out
    });
  }



handleClear = () => {
  //1. setState
  //2. loop through all todos
  //3. remove all todos that have completed === true
  //4. save filtered todos to state.

  //1 
  this.setState({
    ...this.state,
/*2*/todos: this.state.todos.filter(todo => {
/*3*/      return (todo.completed === false);
    })
  });
}

handleToggle = (clickedId) => {
  //1. setState
  //2. change todos
  //3. find the todo that we clicked on
  //4. flip the value of completed for that todo
  //5. keep all other todos the same

  this.setState({
    ...this.state,
    todos: this.state.todos.map(todo => {
      if (todo.id === clickedId){
        return {
          ...todo,
          completed: !todo.completed
        }
      }

      return todo;
    })
  })
}

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    const { todos } = this.state;
    return (
      <div>
        <h1>Todos</h1>
        <TodoList handleToggle={this.handleToggle} todos={todos}/>
        <TodoForm handleAdd={this.handleAdd} />
        <button onClick={this.handleClear}>Clear</button>
      </div>
    );
  }
}

export default App;
