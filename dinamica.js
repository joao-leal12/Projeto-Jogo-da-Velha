
//Aplicando a Logica 


const celula = document.querySelectorAll('.card'); 
let ItsGame = false
let Mostrador ; 
let PaginaFinal = document.getElementById('end'); 
let spain = document.getElementById('expansao'); 
const botao = document.getElementById('btn')
let Titulo = document.getElementById('titulo');

const VerificandoResultados = [

  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8], 
  [2, 4, 6]


]; 

function checandoEmpates(){

  return  [...celula].every( (testando) => {

      return testando.classList.contains("x") || testando.classList.contains("circulo"); 

  })
  
}

function finalizandoGame(isDrawn,simbolo) {

  if(isDrawn){
    PaginaFinal.style.display = 'flex' ; 
    Titulo.innerHTML = 'Empate'
    botao.addEventListener('click', () =>{

      window.location.reload()

    }); 

  }else{

    PaginaFinal.style.display = 'flex' ; 
    spain.innerHTML = simbolo.toUpperCase();   
    
    botao.addEventListener('click', () =>{

      window.location.reload()

    }); 

  }
  


}

function startGame() {

  for(const x of celula){

    x.addEventListener('click', iniciarJogo, {once: true}); 
    
}
;


}
function trocarVez(){

  ItsGame = !ItsGame; 

}

function FimDeJogo(simboloJogador){

  return VerificandoResultados.some( (result) => {

    return result.every((index) => {

      
       return  celula[index].classList.contains(simboloJogador) 


    })

  })

   
}

function iniciarJogo(e) {
 let  simbolo = ItsGame? 'circulo' : 'x'; 
  e.target.classList.add(simbolo); 
  
  
 const Resultado = FimDeJogo(simbolo)
 console.log(Resultado)
 const isDraw = checandoEmpates()
 console.log(isDraw); 
  if(Resultado){

    finalizandoGame(false,simbolo)
    
  }else if(isDraw){

    finalizandoGame(true); 

  }else{

    trocarVez();

  }


  

   
}
  



startGame()

