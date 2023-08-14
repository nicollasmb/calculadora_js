
const display = document.getElementById('result')
const botao = document.querySelectorAll('button')

botao.forEach(button => {
  const textoBotao = button.textContent;
  console.log(textoBotao);

  button.addEventListener('click', () => {
    inserirNumeroNoDisplay(textoBotao)
    console.log('Button clicked:', textoBotao);
  });
});

function inserirNumeroNoDisplay(textoBotao){
   display.insertAdjacentHTML( 'beforeend', textoBotao )
}


function calcularResultado(){
  display.innerHTML = eval(display.innerHTML)
}

function limparDisplay(){
  display.innerHTML = " "
}
