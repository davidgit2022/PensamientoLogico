let number = document.getElementById('inputNumber');
const IMPARES = [];
document.getElementById('btnArray').addEventListener('click', (calculateArray));

function calculateArray() {
  
  for (let i = 0; i <= number.value; i++) {
    if ((i) % 2 != 0) {
      IMPARES.push(i);
    }
  }
  let respuesta = `El array obtenido apartir de ${number.value} es: [${IMPARES}] `;

  document.getElementById('result').innerText = respuesta;
  IMPARES.splice(0, IMPARES.length);
}