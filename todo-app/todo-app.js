let todos = getSavedTodos();

//  Filtruoto teksto objektas.

const filters = {
    searchText: '',
    hideCompleted: false
};

renderTodos(todos, filters);

//  Surenka parasytus zodzius ir sukelia i filters objekta.
document.querySelector('#search-text').addEventListener('input',(e) => {
    filters.searchText = e.target.value;

    // Iskviecia funkcija kai buna panaudotas inputas. 
    renderTodos(todos, filters);
});

document.querySelector('#form').addEventListener('submit',(e) => {
    e.preventDefault();
    todos.push({
        id: uuidv4(),
        text: e.target.elements.text.value,
        completed: false
    });
    saveTodos(todos);
    renderTodos(todos, filters);
    e.target.elements.text.value = '';
});

// Pajungiam checkboxa.
document.querySelector('#hide-completed').addEventListener('change',(e) => {
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters);
});