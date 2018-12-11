
// query and remove

// const p = document.querySelector('p');
// p.remove();

// query all and removes

const ps = document.querySelectorAll('p');
ps.forEach(function(p){
    // console.log(p.textContent);
    p.textContent = '*************';
});