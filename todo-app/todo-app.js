const p = document.querySelectorAll('p');
console.log(p);
p.forEach(function(p){
   const findTodo = function(para, todos){
       return para.find(function(todo){
           return todo.toLowerCase === todos;
       });
   };
   findTodo(p, 'the');
   console.log(p);
});