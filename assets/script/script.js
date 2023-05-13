
let res = document.getElementById("res");
let explicacao = document.querySelector(".explicacao_mostra")

//botão quando clicado, mostra a execução do programa
res.addEventListener("click", function(){
    calcular();
});

function calcular(){
  let valor = document.getElementById("valor").value;
  if(valor < 1 || valor > 100){
    explicacao.innerHTML = "Digite um valor válido de 1 a 100";
    explicacao.style.color = "white";
  } else if (valor % 3 == 0 && valor % 5 == 0){
    explicacao.innerHTML = "FizzBuzz";
    explicacao.style.color = "red";
  } else if (valor % 3 == 0){
    explicacao.innerHTML= "Fizz";
    explicacao.style.color = "blue";
  } else if (valor % 5 == 0){
    explicacao.innerHTML = "Buzz";
    explicacao.style.color = "yellow";
  } else {
    explicacao.innerHTML = "Este número não é divisivel";
    explicacao.style.color = "green";
  }
}