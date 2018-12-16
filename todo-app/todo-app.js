let todos = [];

//  Filtruoto teksto objektas.

const filters = {
    searchText: '',
    hideCompleted: false
};

const todoJSON = localStorage.getItem('todos');

if(todoJSON !== null){
    todos = JSON.parse(todoJSON);
}

//  Tikrina filters objekto ir esamo todos objekto zodzius.
const renderTodos = function(todos, filters) {
    const filteredTodos = todos.filter(function(todo){
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed;
        return searchTextMatch && hideCompletedMatch;
    });

    //  filtruoja nepadarytus todo.
    const incompleteTodos = filteredTodos.filter(function(todo){
        return !todo.completed;
    });
    
    //  Isvalo lauka kad nesikratotu vienoda info.
    document.querySelector('#todos').innerHTML = '';

    //  Pateikia esamu nepadarytu todo skaiciu.
    const summary = document.createElement('h2');
    summary.textContent = `You have ${incompleteTodos.length} todos left`;
    document.querySelector('#todos').appendChild(summary);
    
    //  Daro loopa per esama objekta ir iskelia visus todo i teksta p pagrindu.
    filteredTodos.forEach(function(todo){
        const p = document.createElement('p');

        if(todo.text.length > 0) {
            p.textContent = todo.text;
        } else {
            p.textContent = 'Unnamed Todo';
        }

        
        document.querySelector('#todos').appendChild(p);
    });
};


//  Iskvieca funkcija kad parasytu esamus todo.
renderTodos(todos, filters);




//  Surenka parasytus zodzius ir sukelia i filters objekta.
document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value;

    //  Iskviecia funkcija kai buna panaudotas inputas. 
    renderTodos(todos, filters);
});

document.querySelector('#form').addEventListener('submit', function(e){
    e.preventDefault();
    todos.push({
        text: e.target.elements.text.value,
        completed: false
    });
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos(todos, filters);
    e.target.elements.text.value = '';
});

// Pajungiam checkboxa.
document.querySelector('#hide-completed').addEventListener('change', function(e){
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters);
});