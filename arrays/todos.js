const todos = [{
  text: 'Learn JavaScript',
  completed: false
}, {
  text: 'Find new job',
  completed: false
}, {
  text: 'Walk the dog',
  completed: true
}, {
  text: 'Meditate',
  completed: true
}];

const findTodo = function(todos, todosText){
  return todos.find(function(todo, index){
    console.log(index);
    return todo.text.toLowerCase() === todosText.toLowerCase();
  });
  
  
};

const todo = findTodo(todos, 'find new job');
console.log(todo);
console.log(todos);