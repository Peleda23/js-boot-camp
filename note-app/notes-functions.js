"use strict";

// Skaito esamas zinutes is localStorage. 
const getSavedNotes = () => {
    const noteJSON = localStorage.getItem('notes');

    try {
        return noteJSON ? JSON.parse(noteJSON) : [];
    } catch (e) {
        return [];
    }
};

// Issaugoti info i localstorge.
const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes));
};

// Istrinam zinute is saraso.
const removeNote = (id) => {
    const noteIndex = notes.findIndex((note) => note.id == id);

    if (noteIndex > -1) {
        notes.splice(noteIndex, 1);
    }
};

// Sukuria norimus elementus puslapyje.
const generateNoteDOM = (note) => {
    const noteEl = document.createElement('div');
    const textEl = document.createElement('a');
    const button = document.createElement('button');

    // Sukuriamas istrinimo mygtuko tekstas.
    button.textContent = 'x';
    noteEl.appendChild(button);
    button.addEventListener('click', () => {
        removeNote(note.id);
        saveNotes(notes);
        renderNotes(notes, filters);
    });

    // Sukuriamas zinutes pavadinimo tekstas.
    if (note.title.length > 0) {
        textEl.textContent = note.title;
    } else {
        textEl.textContent = 'Unnamed note';
    }

    // Nustatom a elemnto linka i kita puslapi.
    textEl.setAttribute('href', `/edit.html#${note.id}`);
    noteEl.appendChild(textEl);
    return noteEl;
};

// Rusiuoja zinutes pagal galimus pasirinkimus.
const sortNotes = (notes, sortBy) => {
    if (sortBy === 'byEdited') {
        return notes.sort((a, b) => {
            if (a.updatedAt > b.updatedAt) {
                return -1;
            } else if (a.updatedAt < b.updatedAt) {
                return 1;
            } else {
                return 0;
            }
        });
    } else if (sortBy === 'byCreated') {
        return notes.sort((a, b) => {
            if (a.createdAt > b.createdAt) {
                return -1;
            } else if (a.createdAt < b.createdAt) {
                return 1;
            } else {
                return 0;
            }
        });
    } else if (sortBy === 'alphabetically') {
        return notes.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1;
            } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1;
            } else {
                return 0;
            }
        });
    } else {
        return notes;
    }
};

// Generuoja zinutes i puslapi.
const renderNotes = (notes, filters) => {
    notes = sortNotes(notes, filters.sortBy);
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()));

    //  Istrina visa kita nereikalinga teksta ir palieka tik naujai isfiltruota.
    document.querySelector('#notes').innerHTML = '';

    //  Funkcija isfiltruotas zinutes iskelia i ekrana.
    filteredNotes.forEach((note) => {
        const noteEl = generateNoteDOM(note);
        document.querySelector('#notes').appendChild(noteEl);
    });
};

//  Sukuria paskutines koreguots zinutes zinute.
const generateLastEdited = (timestamp) => `Last edited ${moment(timestamp).fromNow()}`;