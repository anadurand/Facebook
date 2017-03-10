//local storage no soporta objetos solo string, truco convertir todo a string
//convertir obj a cadena (stringify) y  viceversa  (parse)
function addItemStorage(key,value){
  if(typeof(Storage)!== "undefined"){
      localStorage.setItem(key,JSON.stringify(value));
  }else{
    console.log("Local storage not supported");
  }


}

function getItemStorage(key){
  if(typeof(Storage)!== "undefined"){
      return JSON.parse(localStorage.getItem(key));
  }else{
    console.log("Local storage not supported");
  }

}
