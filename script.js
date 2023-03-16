// ANEXO 1
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafo1 = document.querySelector('.parrafo1');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(h1);

console.log({
    h1, 
    p, 
    parrafo1, 
    pid, 
    input,
});
h1.innerHTML = "Gaaaa <br> Feo";
h1.innerText = "Gaaaa <br> Feo";

console.log(h1.getAttribute('class'));
h1.setAttribute('class', 'LG');

h1.classList.add('rojo');
h1.classList.remove('SONY');

input.value = "456";

// const img = document.createElement('img');
// img.setAttribute('src', 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg');

// pid.append(img);


// EJEMPLO
pid.innerHTML = '';
const img = document.createElement('img');
img.setAttribute('src', 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg');

pid.append(img);