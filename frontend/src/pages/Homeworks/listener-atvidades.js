let btnCriarContTurma = document.getElementById("btn-criar-cont-turma");
let divTipoConteudo = document.getElementsByClassName("tipo-cont")[0];

btnCriarContTurma.addEventListener("click", function(e){

    (e).preventDefault;
    
  if(divTipoConteudo.style.display == "block"){
    divTipoConteudo.style.display="none"
  }

  else{
    divTipoConteudo.style.display="block"
  }

});

