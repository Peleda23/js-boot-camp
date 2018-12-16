let notes = [];

  const filters = {
    searchText: ''
  };

  // Patikrinam ar yra kokios info objekte.
  const noteJSON = localStorage.getItem('notes');
  
  if(noteJSON !== null){
    notes = JSON.parse(noteJSON);
  }

//  Funkcija filtruoja ir iskelia i ekrana zinutes.

  const renderNotes = function(notes, filters){
    const filteredNotes = notes.filter(function(note){
      return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    });

    //  Istrina visa kita nereikalinga teksta ir palieka tik naujai isfiltruota.
    document.querySelector('#notes').innerHTML = '';

    //  Funkcija isfiltruotas zinutes iskelia i ekrana.
    filteredNotes.forEach(function(note){
      const noteEl = document.createElement('p');

      if(note.title.length > 0) {
        noteEl.textContent = note.title;
      } else {
        noteEl.textContent = 'Unnamed note';
      }
      
      document.querySelector('#notes').appendChild(noteEl);
    });
  };

  renderNotes(notes, filters);

  document.querySelector('#create-note').addEventListener('click', function(e){
    notes.push({
      title: '',
      body: ''
    });
    localStorage.setItem('notes', JSON.stringify(notes));
    renderNotes(notes, filters);
  });

  

  document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
  });

  document.querySelector('#filter-by').addEventListener('change', function(e){
    console.log(e.target.value);
  });