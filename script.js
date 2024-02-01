
var dataFutura = new Date("March 17, 2024 10:00").getTime();

var dias, horas, minutos, segundos;

function setValores(e){
  return document.getElementById(e);
}

setInterval(function(){
  var dataAtual = new Date().getTime();
  var segundosTotal = (dataFutura - dataAtual)/1000;
  
  dias = parseInt(segundosTotal/86400);
  segundosTotal = segundosTotal%86400;

  horas = parseInt(segundosTotal/3600);
  segundosTotal = segundosTotal%3600;

  minutos = parseInt(segundosTotal/60);
  segundos = parseInt(segundosTotal%60);

  if (horas < 10) horas = '0' + horas;
  if (minutos < 10) minutos = '0' + minutos;
  if (segundos < 10) segundos = '0' + segundos;

  setValores("dias").innerHTML = dias;
  setValores("horas").innerHTML = horas;
  setValores("minutos").innerHTML = minutos;
  setValores("segundos").innerHTML = segundos;
},1000);

