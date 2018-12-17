// Skaito esamas zinutes is localStorage. 
const getSavedNotes = function() {
    const noteJSON = localStorage.getItem('notes');
    
    if(noteJSON !== null){
    return JSON.parse(noteJSON);
    } else {
        return [];
    }
};

// Issaugoti info i localstorge.
const saveNotes =  function(notes) {
    localStorage.setItem('notes', JSON.stringify(notes));
};


// Sukuria norimus elementus puslapyje.
const generateNoteDOM = function(note)  {
    const noteEl = document.createElement('div');
    const textEl = document.createElement('span');
    const button = document.createElement('button');

    // Sukuriamas istrinimo mygtuko tekstas.
    button.textContent = 'x';
    noteEl.appendChild(button);

    // Sukuriamas zinutes pavadinimo tekstas.
    if(note.title.length > 0) {
        textEl.textContent = note.title;
    } else {
        textEl.textContent = 'Unnamed note';
    }

    noteEl.appendChild(textEl);
    return noteEl;
};

// Generuoja zinutes i puslapi.
const renderNotes = function(notes, filters){
    const filteredNotes = notes.filter(function(note){
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    });

    //  Istrina visa kita nereikalinga teksta ir palieka tik naujai isfiltruota.
    document.querySelector('#notes').innerHTML = '';

    //  Funkcija isfiltruotas zinutes iskelia i ekrana.
    filteredNotes.forEach(function(note){
    const noteEl = generateNoteDOM(note);
    document.querySelector('#notes').appendChild(noteEl);
    });
};