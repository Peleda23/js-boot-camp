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


// Generuoja sarasa esamu zinuciu puslapyje.
const generateNoteDOM = function(note)  {
    const noteEl = document.createElement('p');

    if(note.title.length > 0) {
        noteEl.textContent = note.title;
    } else {
        noteEl.textContent = 'Unnamed note';
    }

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