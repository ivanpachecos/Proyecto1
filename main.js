// Getting DOM elements
const inputTarea = document.getElementById('valorTarea');
const btnAgregarTarea = document.getElementById('btnAgregarTarea');
const listasDeTarea = document.getElementById('listaDeTarea');

// Agregar tarea
function agregarTarea() {
  const valor = inputTarea.value.trim();
  if (valor === '') return alert('Ingrese la tarea que desea guardar');
  
  // crear un nuevo elemento a la lista
  const liElementoParaCrearTarea = document.createElement('li');

  // agregar la tarea
  const textoQueColocan = document.createElement('span');
  textoQueColocan.innerText = valor;
  liElementoParaCrearTarea.appendChild(textoQueColocan);

  // btn de eliminar la tarea
  const removeBtn = document.createElement('button');
  removeBtn.innerText = 'Remove';
  removeBtn.className = 'remove';
  removeBtn.addEventListener('click', function() {
    listasDeTarea.removeChild(liElementoParaCrearTarea);
  });
  liElementoParaCrearTarea.appendChild(removeBtn);

  // agregar en una lista
  listasDeTarea.appendChild(liElementoParaCrearTarea);

  // limpirar el inpput
  inputTarea.value = '';
}

btnAgregarTarea.addEventListener('click', agregarTarea);
inputTarea.addEventListener('keydown', function(evento) {
  if (evento.key === 'Enter') {
    agregarTarea();
  }
});