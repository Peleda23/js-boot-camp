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

  document.querySelector('button').addEventListener('click', function(e){
    e.target.textContent = 'The button was clicked';
  });

  document.querySelectorAll('button')[1].addEventListener('click', function(){
    console.log('Button was clicked');
  });