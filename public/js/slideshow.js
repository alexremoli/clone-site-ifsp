
//Iniciando a variável slideIndex com o valor correspondente ao primeiro slide. 
var slideIndex = 1;
mostrarSlides(slideIndex);

//Função para passar os slides. Recebe o valor -1 para voltar e 1 para avançar.
function passarSlides(n) {
  mostrarSlides(slideIndex += n);
}
//Função para selecionar o slide através dos "dots". Recebe o valor do dot, que corresponde ao slide selecionado.
function slideSelecionado(n) {
  mostrarSlides(slideIndex = n);
}
//Função para exibir os slides
function mostrarSlides(n) {
  var i;
  //Armazenando todos os slides na variável "slides".
  var slides = document.getElementsByClassName("mySlides");
  //Armazenando todos os dots na variável "dots".
  var dots = document.getElementsByClassName("dot");
  //Armazenando a quantidade total de slides.
  quantidadeSlide = slides.length;
  //Esse if serve para a função "passarSlides()", pois ao chegar no último slide (Exemplo: slideIndex = 4), ao clicar mais uma vez ele vai somar mais um, tornando o slideIndex = 5. Dessa forma após a verificação do if, como o número 5 ultrapassa a qtd total de slides, o slideIndex volta para a posição 1 novamente.
  if (n > quantidadeSlide) {
    slideIndex = 1;
  }    
  if (n < 1) {
    slideIndex = quantidadeSlide;
  }
  //Ciclo for para esconder todos os slides, para que no final da função seja exibido somente o slide selecionado.
  for (i = 0; i < quantidadeSlide; i++) {
      slides[i].style.display = "none";  
  }
  //Ciclo for para tornar todos os dots "não ativos", fazendo a troca do nome da classe "active" para "". Para que posteriormente somente o dot ativo receba a classe "active".
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  //Exbindo apenas o slide selecionado alterando o display de "none" para "block".
  slides[slideIndex-1].style.display = "block";
  //Ativando o dot selecionado através da classe "active"
  dots[slideIndex-1].className += " active";
}