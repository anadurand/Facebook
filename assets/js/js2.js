window.addEventListener('load',function() {

var muro = [{user: "ana", publicaciones: [{estado: 1, id: 0, comentario:"hola"},{estado: 0, id: 1,comentario:"que"}]}];

var user = location.search.split('&')[1];

//var id = location.search.split('=')[2];
//document.title = "Facebook - " + user.toUpperCase();
//filtra el muro segun usuario
var muroUser = muro.filter(function(items,j){
                    return items.user == "ana";

                });
var publico = document.getElementById("publico");
var amigos = document.getElementById("amigos");
var editar = document.getElementsByName("editar");
var eliminar = document.getElementsByName("eliminar")
var publicaciones = document.getElementById("publicaciones");
var post = document.getElementById("post");

var frase = "";

publico.addEventListener("click", function(ev){
  ev.preventDefault();
  frase = "";
  muroUser[0].publicaciones.forEach(function(item,i){
        if(item.estado == 1){
          frase += "<div class = ''>" +
                    item.comentario +
                    "<br><br>" +
                    "</div>";
        }
  });
  publicaciones.innerHTML = frase;
});

amigos.addEventListener("click", function(ev){
  ev.preventDefault();
  frase = "";
  muroUser[0].publicaciones.forEach(function(item,i){
        if(item.estado == 0){
          publicaciones.appendChild(createPost(item.comentario));
        }
  });

});


function createPost(txt) {


      var post = document.createElement('div');
      var texto = document.createElement('p');
      texto.innerHTML = txt;
      var editar = document.createElement('a');
      var eliminar = document.createElement('a');
      editar.innerHTML = "Editar";
      editar.href = "";
      eliminar.innerHTML = "Eliminar";
      eliminar.href = "";
      editar.addEventListener("click", function(e){
        e.preventDefault();
        var postParent = e.target.parent; // Devuelve el padre



      });
      eliminar.addEventListener('click',function(e) {
        e.preventDefault();
        var postParent = e.target.parent; // Devuelve el padre
        muroUser[0].publicaciones
      });

      post.appendChild(texto);
      post.appendChild(editar);
      post.appendChild(eliminar);
      return post;


  }

  post.addEventListener("click", function(e){
    e.preventDefault();
    var estado = document.getElementById("estado").value;
    var texto = document.getElementById("texto");
    var txt = texto.value;
    if(texto.value == ""){
      alert("Falta ingresar texto");
    }else{
      var tamano = muroUser[0].publicaciones.length;
      var postNuevo = new NuevoPost(estado,txt, tamano);
      muroUser[0].publicaciones.push(postNuevo);
      publicaciones.appendChild(createPost(txt));
      texto.value = "";
    }


  });

  function NuevoPost(estado, texto, tamano){
    this.estado = estado;
    this.id = tamano-1;
    this.comentario = texto;
  }






});
