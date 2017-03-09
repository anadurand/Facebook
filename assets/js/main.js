window.addEventListener('load',function() {

  var users = [{user: "ana",password: "00"}];  //array de objetos
  var loginButton = document.getElementById('login');

  loginButton.addEventListener('click',function(event) {
    event.preventDefault();
    var user = document.getElementById("user").value;
    var password = document.getElementById("password").value;
    var errorUser = document.getElementById("errorUser");
    var errorPassword = document.getElementById("errorPassword");
    var link = document.getElementById("link");

    if(user == "" || password == ""){
      if (user == "" && password == "") {
        errorUser.innerHTML = "Falta ingresar usuario";
        errorPassword.innerHTML = "Falta ingresar password";
        user.focus();

      }else {
        if(user == ""){
          errorUser.innerHTML = "Falta ingresar usuario";
          errorPassword.innerHTML = "";
          user.focus();
        }else{
          errorUser.innerHTML = "";
          errorPassword.innerHTML = "Falta ingresar password";
          password.focus();
        }
      }
    }else{

      users.forEach(function(item){
        if(item.user == user){
          if(item.password == password ){
              document.location = "index2.html?nombre="+user;
          }else{
            errorUser.innerHTML = "";
            errorPassword.innerHTML = "Password incorrecto";
            password.focus();
          }

        }else{
          errorUser.innerHTML = "Usuario no existe";
          errorPassword.innerHTML = "";
          user.focus();
        }
      })
    }

  });
});
