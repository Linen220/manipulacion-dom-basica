// ANEXO 2
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#resultado'); 
const form = document.querySelector('#form');


// addEventListener
form.addEventListener('submit', calcularSuma);
// btn.addEventListener('click', calcularSuma);


// event = e
function calcularSuma(e){
    e.preventDefault(); //Evita que el formulario de actualize
    console.log(parseInt(input1.value) + parseInt(input2.value));
    const sumaResultado = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = "Resultado: " + sumaResultado;
}

// form.addEventListener('mouseover', enviarFormulario);

// function enviarFormulario(e){
//     e.preventDefault();
//     alert('virus');
// }
