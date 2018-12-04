const todos = ['Make breakfast', 'Walk the dog', 'Go to work', 'Learn javascript', 'Meditate'];

todos.splice(2, 1);
todos.push("New todo in the end!");
todos.shift();

console.log(`You have ${todos.length} todos! `);

todos.forEach(function(item, index){
  const num = index + 1;
  console.log(`${num}. ${item}.`);
});
