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

// * Filtruoto teksto objektas.

const filters = {
    searchText: ''
};

// * Tikrina filters objekto ir esamo todos objekto zodzius.
const renderTodos = function(todos, filters) {
    const filteredTodos = todos.filter(function(todo){
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
    });

    // * filtruoja nepadarytus todo.
    const incompleteTodos = filteredTodos.filter(function(todo){
        return !todo.completed;
    });
    
    // * Isvalo lauka kad nesikratotu vienoda info.
    document.querySelector('#todos').innerHTML = '';

    // * Pateikia esamu nepadarytu todo skaiciu.
    const summary = document.createElement('h2');
    summary.textContent = `You have ${incompleteTodos.length} todos left`;
    document.querySelector('#todos').appendChild(summary);
    
    // * Daro loopa per esama objekta ir iskelia visus todo i teksta p pagrindu.
    filteredTodos.forEach(function(todo){
        const p = document.createElement('p');
        p.textContent = todo.text;
        document.querySelector('#todos').appendChild(p);
    });
};

// * Iskvieca funkcija kad parasytu esamus todo.
renderTodos(todos, filters);




// * Surenka parasytus zodzius ir sukelia i filters objekta.
document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value;

    // * Iskviecia funkcija kai buna panaudotas inputas. 
    renderTodos(todos, filters);
});
