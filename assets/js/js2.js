window.addEventListener('load',function() {


var muro = [{user: "ana", publicaciones: [{estado: 1, comentario:"hola"},{estado: 0,comentario:"que"}]}];

//var user = location.search.split('nombre=')[1].toUpperCase();
//document.title = "Facebook - " + user;
var publico = document.getElementById("publico");
var amigos = document.getElementById("amigos");
var editar = document.getElementsByName("editar");
var eliminar = document.getElementsByName("eliminar")

var publicaciones = document.getElementById("publicaciones");
var frase = "";

publico.addEventListener("click", function(ev){
  ev.preventDefault();
  muro.forEach(function(item,i){
        if(item.publicaciones[i].estado == 1){
          frase += "<div class = ''>" +
                    item.publicaciones[i].comentario +
                    "<br><br>" +
                    "<a href = '' name = 'editar'>" + "Editar" + "</a>"+
                    "<a href = '' name = 'eliminar'>Eliminar</a>"+
                    "</div>";
        }
  });
  publicaciones.innerHTML = frase;

});

amigos.addEventListener("click", function(ev){
  ev.preventDefault();
  muro.forEach(function(item,i){
        if(item.publicaciones[i].estado == 0){
          frase += "<div class = ''>" +
                    item.publicaciones[i].comentario +
                    "<br><br>" +
                    "<a href = '' id = 'editar'>" + "Editar" + "</a>"+
                    "<a href = '' id = 'eliminar'>Eliminar</a>"+
                    "</div>";
        }
  });
  publicaciones.innerHTML = frase;

});




});
