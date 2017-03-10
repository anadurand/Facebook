window.addEventListener('load',function() {

  var validUsers = getItemStorage("valid-users");
  if(validUsers == null){
    validUsers = [{email: "anadc@gmail.com" ,password:"1234"},
                  {email: "gian@laboratoria.la", password:"2345"}];
    addItemStorage("valid-users",validUsers);
  }
});
