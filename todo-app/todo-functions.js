const getSavedTodos = () => {
    const todoJSON = localStorage.getItem('todos');
    return todoJSON ? JSON.parse(todoJSON) : [];
};

// Funkcija kuri isaugo i localstorage info.
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
};

// Mygtukas kuris istrina norima eilute.
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id == id);

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1);
    }
};

// JavaScript is hard. 
// Chekboxas ijungia ir isjungia padarytus todo.
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id);

    if (todo) {
        todo.completed = !todo.completed;
    }
};

const renderTodos = (todos, filters) => {
    const filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed;
        return searchTextMatch && hideCompletedMatch;
    });

    //  filtruoja nepadarytus todo.
    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed);

    

    //  Isvalo lauka kad nesikratotu vienoda info.
    document.querySelector('#todos').innerHTML = '';

    //  Pateikia esamu nepadarytu todo skaiciu.
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos));
    
    //  Daro loopa per esama objekta ir iskelia visus todo i teksta p pagrindu.
    filteredTodos.forEach((todo) => {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo));
    });
};

// Get the DOM elements for an individual note.
const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('div');
    const checkbox = document.createElement('input');
    const todoText = document.createElement('span');
    const removeButton = document.createElement('button');
    
    // Sutvarkom input, kad butu checkboxas.
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = todo.completed; 
    todoEl.appendChild(checkbox);
    checkbox.addEventListener('change',() => {
        toggleTodo(todo.id);
        saveTodos(todos);
        renderTodos(todos, filters);
    });
    

    // Parasom ir iskeliam todo antraste.
    todoText.textContent = todo.text;
    todoEl.appendChild(todoText);

    // Duodam pavadinima ir iskeliam mygtuka.
    removeButton.textContent = 'x';
    todoEl.appendChild(removeButton);
    removeButton.addEventListener('click',() => {
        removeTodo(todo.id);
        saveTodos(todos);
        renderTodos(todos, filters);
    });

    return todoEl;
};

// Get the DOM elements for list summary.
const generateSummaryDOM = (incompleteTodos) => {
    const summary = document.createElement('h2');
    summary.textContent = `You have ${incompleteTodos.length} todos left`;
    return summary;
};