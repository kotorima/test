  let codeObject = {   
  450:function(){
    console.log("OK");
    },
  506:function(){
    alert("Error 506");
    },
  310:function(){
    window.open("http://yandex.ru"); 
    },
  570:function(){
    console.log("ERROR"); 
    alert("Error 570");
    },
  605:function(){
    document.querySelector('body').innerHTML = '<div>605</div>';
    }
};
function outputCode(obj){
 
  for (let key in obj) { 
  
  	obj[key](); 
  }
}

outputCode(codeObject);
