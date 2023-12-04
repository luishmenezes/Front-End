const form = document.querySelector("#form");
const nomeInput = document.querySelector("#nomesobrenome");
const emailInput = document.querySelector("#email");
const telefoneInput = document.querySelector("#telefone");
const mensagemInput = document.querySelector("#mensagem");


 

function luis(){
  alert("Luis Henrique - Desenvolvimento Web")
  
}

function joana(){
  alert("Joana Falcão - Prototipação")
  
}
function gustavo(){
  alert("Gustavo Souza - Apresentação")
  
}
function joyce(){
  alert("Joyce Barbosa - Prototipação")
  
}
function edson(){
  alert("Edson Sotero - Análise")
  
}
function victor(){
  alert("Victor Souza - Apresentação")
  
}
function samuel(){
  alert("Samuel Lucas - Pesquisa")
  
}
function eduarda(){
  alert("Eduarda Veloso - Customer Experience")
  
}
function isabela(){
  alert("Isabela Araujo - Pitch")
  
}
function walbert(){
  alert("Walbert Pereira - UX/UI Designer")
  
}


function BaixarAndroid(){
  
      
  var conteudoTexto = "Parabéns, você baixou o aplicativo Reco para android";
  var blob = new Blob([conteudoTexto], { type: "text/plain" });
  var link = document.createElement('a');
  var url = window.URL.createObjectURL(blob);

  
  link.href = url;

  
  link.download = 'aplicativoRECOAndroid.txt';

  
  document.body.appendChild(link);

  
  link.click();

  
  document.body.removeChild(link);

  L
  window.URL.revokeObjectURL(url);
  
}

function BaixarApple(){
  
    
  var conteudoTexto = "Parabéns, você baixou o aplicativo Reco para IOS";
  var blob = new Blob([conteudoTexto], { type: "text/plain" });
  var link = document.createElement('a');
  var url = window.URL.createObjectURL(blob);

  
  link.href = url;

  
  link.download = 'aplicativoRECOIos.txt';

  
  document.body.appendChild(link);

  
  link.click();

  
  document.body.removeChild(link);

  L
  window.URL.revokeObjectURL(url);
}