const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
  }, {
    title: 'Habits to work on',
    body: 'Exercise. Eating a bit better'
  }, {
    title: 'Office modifications',
    body: 'Get new seat'
  }];

  const filters = {
    searchText: ''
  };

// * Funkcija filtruoja ir iskelia i ekrana zinutes.

  const renderNotes = function(notes, filters){
    const filteredNotes = notes.filter(function(note){
      return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    });

    // * Istrina visa kita nereikalinga teksta ir palieka tik naujai isfiltruota.
    document.querySelector('#notes').innerHTML = '';

    // * Funkcija isfiltruotas zinutes iskelia i ekrana.
    filteredNotes.forEach(function(note){
      const noteEl = document.createElement('p');
      noteEl.textContent = note.title;
      document.querySelector('#notes').appendChild(noteEl);
    });
  };

  renderNotes(notes, filters);

  document.querySelector('#create-note').addEventListener('click', function(e){
    e.target.textContent = 'The button was clicked';
  });

  

  document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
  });
// * Sujungiam su forma.
  document.querySelector('#name-form').addEventListener('submit', function(e){
    // * Nustatom, kad forma nedarytu standartiskai.
    e.preventDefault();
    // * Kadangi formoje gali buti daug inputu tai rasom(element.firstName(pagal duota varda)) taip ji issikriame.
    console.log(e.target.elements.firstName.value);
    // * Paspaudus submit migtuka istrina inpute parasyta zodi.
    e.target.elements.firstName.value = '';
  });