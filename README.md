### Components 
- Are the building blocks of the UI , they are reusable 
- Independent pieces of code that encapsulate a part of the user interface.

### props
Props are a way of passing data from the parent component to the child component 

### Communication 
Parent component can communicate to the child component and a child component can communicate back to the parent component(callback functions) 

### State (data belonging to a component)
refers to an object that represents the current state of a component. 
Useful in tracking of and managing a components internal data. 
- Allows us to dynamically update and render information based on change in the app or user interactions. 

### My todo app users stories

## components

1. App component 
- this is the main component to render the entire app 
- It will hold the state of the todos and manage the addition and removal of todos (Single source of truth)

2. Todolist component 
- render the lists of todos 
- receive the todos props from the APP component 

3. TodoItem Component 
- represent an individual todo item
- receive a single todo as props from the todoList component 

4. AddToDo component
- provide an input field and a button to add new todos 
- communicate with app component to add new todos (child to parent communication)

## props 
1. App component 
- maintain the state of the todos 
- passes the todo array and a function to add todos as props to the TodoList and AddTodo components

2. TodoList component  
- receive todos array and maps through it to render individual todoitem components 

3. Todoitem component 
- recieves the todos array as props and maps throughs it to render individual todoitem components 

4. Addtodo component 
- communicates with the app component to add new todos by calling the function passed as a prop


### Parent to child communication 
1. App to Todolist 
- passes the todos array as a prop 
2. Todolist to todoitem 
- maps through the todos array and passes individual todo objects to the Todoitem components as a prop

### child to parent communication 
1. TodoItem to Todolist 
- may use a callback function as a prop to inform the todolist component when a todo is completed or removed. 

2. AddtoDo to APP 
- invokes the function passed as a prop in the APP component to add new todos.




















































