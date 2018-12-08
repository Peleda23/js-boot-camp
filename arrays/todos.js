const todos = [{
  text: 'Order cat food',
  completed: true
}, {
  text: 'Clean kitchen',
  completed: false
}, {
  text: 'Buy food',
  completed: true
}, {
  text: 'Do work',
  completed: false
}, {
  text: 'Exercise',
  completed: true
}];

const deleTodo = function(todos, todoText){
  const index = todos.findIndex(function(todo){
    return todo.text.toLowerCase() === todoText.toLowerCase();
  });
  if(index > -1){
    todos.splice(index, 1);
  }
};

deleTodo(todos, '!!buy food');
console.log(todos);