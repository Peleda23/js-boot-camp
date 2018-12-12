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
// query and remove

// const p = document.querySelector('p');
// p.remove();

// query all and removes

const ps = document.querySelectorAll('p');
ps.forEach(function(p){
    // console.log(p.textContent);
    p.textContent = '*************';
});

// Create new element

const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is new element from JavaScript!!!';

// Append new paragraph to the page
document.querySelector('body').appendChild(newParagraph);