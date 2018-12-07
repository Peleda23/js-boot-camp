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

const findNote = function(notes, noteTitle){
    return notes.find(function(note, index){
        return note.title.toLowerCase() === noteTitle.toLowerCase();
    });
};

// const findNote = function(notes, noteTitle){
//   const index = notes.findIndex(function(note, index){
//       return note.title.toLowerCase() === noteTitle.toLowerCase();
//   });
//   return notes[index];
// };

const note = findNote(notes, 'Office modifications');
console.log(note);
// test

