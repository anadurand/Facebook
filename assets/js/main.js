window.addEventListener('load',function() {

  var users = [{id: 1, name: "ana",user: "ana.dc1004@gmail.com",password: "00"}];  //array de objetos
  var loginButton = document.getElementById('login');

  loginButton.addEventListener('click',function(event) {
    event.preventDefault();
    var user = document.getElementById("user");
    var password = document.getElementById("password");
    var errorUser = document.getElementById("errorUser");
    var errorPassword = document.getElementById("errorPassword");
    var link = document.getElementById("link");

    if(user.value == "" || password.value == ""){
      if (user == "" && password == "") {
        errorUser.innerHTML = "Falta ingresar usuario";
        errorPassword.innerHTML = "Falta ingresar password";
        user.focus();

      }else {
        if(user.value == ""){
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
      if(user.value.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.com$/)){
        users.forEach(function(item){
          if(item.user == user.value){
            if(item.password == password.value ){
              document.location = "index2.html?nombre= &"+ item.name + "&id=" + item.id;
            }else{
              errorUser.innerHTML = "";
              errorPassword.innerHTML = "Password incorrecto";
              password.focus();
            }

          }else{
            errorUser.innerHTML = "E-mail no existe";
            errorPassword.innerHTML = "";
            user.focus();
          }
        });

      }else{
        errorUser.innerHTML = "Ingresar e-mail correcto";
        errorPassword.innerHTML = "";
        user.focus();
      }
    }

  });
});
