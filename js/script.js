var carta1 = {
  nome: "Bulbasauro",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  atributos: {
    ataque: 7,
    defesa: 8,
    magia: 6
  }
};
  
var carta2 = {
  nome: "Darth Vader",
  imagem: "https://disneyplusbrasil.com.br/wp-content/uploads/2021/06/Darth-Vader-serie-Disney-Plus-1024x576.jpg",
  atributos: {
    ataque: 7,
    defesa: 8,
    magia: 10
  }
};

var carta3 = {
  nome: "Shiryu de Dragão",
  imagem: "http://pm1.narvii.com/6399/96fdb9d4fe6a9e72b9bc60ad418e3c43795e53b4_00.jpg",
  atributos: {
    ataque: 5,
    defesa: 9,
    magia: 10
  }
};

var cartas = [carta1, carta2, carta3];

// console.log(cartas);

var cartaMaquina;
var cartaJogador;

function sortearCarta(){
  var numeroCartaMaquina = parseInt(Math.random()*3);
  cartaMaquina = cartas[numeroCartaMaquina];
  // console.log(cartaMaquina);
  
  var numeroCartaJogador = parseInt(Math.random()*3);
  while(numeroCartaMaquina == numeroCartaJogador){
    numeroCartaJogador = parseInt(Math.random()*3);
  }
  
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);
  
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  
  // exibirOpcoes();
  exibirCartaJogador();
}

//exibe as opcoes dos atributos (ataque, defesa, magia)
// function exibirOpcoes(){
//   var opcoes = document.getElementById("opcoes");
//   //html pelo js para aparecer os atributos da carta 
//   var opcoesTexto = "";
  
//   for(var atributo in cartaJogador.atributos){
//     opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo;
//     // console.log(atributos);
//   }
  
//   opcoes.innerHTML = opcoesTexto;
// }

function obtemAtributoSelecionado(){
  var radioAtributos = document.getElementsByName("atributo");
  
  for(i = 0; i  < radioAtributos.length; i++){
    if (radioAtributos[i].checked==true){
      return radioAtributos[i].value;
    }
  }
}

function jogar(){
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");
  // console.log(atributoSelecionado);
  // var elementoResultado = document.getElementById("resultado");
  // var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  // var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
  
  if(cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
    // elementoResultado.innerHTML="Você venceu!";
    htmlResultado = "<p class='resultado-final'>Venceu</p>"
  }else if(cartaMaquina.atributos[atributoSelecionado] > cartaJogador.atributos[atributoSelecionado]){
    // elementoResultado.innerHTML="Você perdeu, a carta da máquina é maior";
    htmlResultado = "<p class='resultado-final'>Perdeu</p>"
  }else{
    // elementoResultado.innerHTML = "Empatou";
    htmlResultado = "<p class='resultado-final'>Empatou</p>"
  }
  divResultado.innerHTML = htmlResultado;
  document.getElementById('btnJogar').disabled = true;
  exibirCartaMaquina();
}

function exibirCartaJogador(){
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage=`url(${cartaJogador.imagem})`;
  //outro jeito de chamar a mesma imagem abaixo
  // divCartaJogador.style.backgroundImage="url(" + cartaJogador.imagem + ")";
  
  var moldura ='<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>"
  
  var opcoesTexto = "";
  for(var atributo in cartaJogador.atributos){
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>";
    // console.log(atributos);
  }
  
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
  
  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina(){
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage=`url(${cartaMaquina.imagem})`;
  //outro jeito de chaar a mesma imagem abaixo
  // divCartaMaquina.style.backgroundImage="url(" + cartaJogador.imagem + ")";
  
  var moldura ='<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>"
  
  var opcoesTexto = "";
  for(var atributo in cartaMaquina.atributos){
    opcoesTexto += "<p name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>";
    // console.log(atributos);
  }
  
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
  
  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}