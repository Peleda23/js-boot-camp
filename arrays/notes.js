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

const sortNotes = function(notes){
  notes.sort(function(a, b){
    if(a.title.toLowerCase() < b.title.toLowerCase()){
      return -1;
    } else if (b.title.toLocaleLowerCase() < a.title.toLowerCase()){
      return 1;
    } else {
      return 0;
    }
  });
};

const findNote = function(notes, noteTitle){
    return notes.find(function(note, index){
        return note.title.toLowerCase() === noteTitle.toLowerCase();
    });
};

const findNotes =  function(notes, query) {
  return notes.filter(function(note, index){
    const isTitleMatch = note.title.toLocaleLowerCase().includes(query.toLocaleLowerCase());
    const isBodyMatch = note.body.toLocaleLowerCase().includes(query.toLocaleLowerCase());
    return isTitleMatch || isBodyMatch;
  });
};

// console.log(findNotes(notes, 'eating'));
// const note = findNote(notes, 'some other Office modifications');
// console.log(note);

sortNotes(notes);
console.log(notes);         

