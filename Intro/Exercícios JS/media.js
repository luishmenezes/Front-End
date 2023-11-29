function calcular(){
  var nome = document.getElementById("name").value;
  var nota1 = parseFloat(document.getElementById("nota1").value);
  var nota2 = parseFloat(document.getElementById("nota2").value);

  var media = (nota1 + nota2)/2;

  var mensagem = (media >= 7) ? " Parabéns " + nome + " você foi aprovado! " : "Não foi dessa vez " + nome + " você precisa estudar mais ";


  document.getElementById("calculando").innerHTML = "Calculando a media final de " + nome;
  document.getElementById("notas").innerHTML = "As notas obtidas foram " + nota1 + " e " + nota2;
  document.getElementById("mediaNotas").innerHTML = "A média final será: " + media;
  document.getElementById("resultado").innerHTML = "A mensagem que temos é: " + mensagem;
  
  /*document.body.innerHTML = "Calculando a media final de " + nome" 
   "<p> As notas obtidas foram " + nota1 + " e " + nota2 + "</p>" 
   "<p> A média final será " + media + "</p>" 
  "<p> A mensagem que temos é " + mensagem + "</p>"*/



}