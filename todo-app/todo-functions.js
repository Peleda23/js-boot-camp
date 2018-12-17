const getSavedTodos = function() {
    const todoJSON = localStorage.getItem('todos');

    if (todoJSON !== null){
        return JSON.parse(todoJSON);
    } else {
        return [];
    }
};

const saveTodos = function(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
};

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
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos));
    
    //  Daro loopa per esama objekta ir iskelia visus todo i teksta p pagrindu.
    filteredTodos.forEach(function(todo){
        document.querySelector('#todos').appendChild(generateTodoDOM(todo));
    });
};

// Get the DOM elements for an individual note.
const generateTodoDOM = function(todo) {
    const todoEl = document.createElement('div');
    const checkbox = document.createElement('input');
    const todoText = document.createElement('span');
    const removeButton = document.createElement('button');
    
    // Sutvarkom input, kad butu checkboxas.
    checkbox.setAttribute('type', 'checkbox');
    todoEl.appendChild(checkbox);

    // Parasom ir iskeliam todo antraste.
    todoText.textContent = todo.text;
    todoEl.appendChild(todoText);

    // Duodam pavadinima ir iskeliam mygtuka.
    removeButton.textContent = 'x';
    todoEl.appendChild(removeButton);

    return todoEl;
};

// Get the DOM elements for list summary.
const generateSummaryDOM = function(incompleteTodos) {
    const summary = document.createElement('h2');
    summary.textContent = `You have ${incompleteTodos.length} todos left`;
    return summary;
};