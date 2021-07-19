/*function checarusername() {
    var elMsg=document.getElementById('feedback');
    if(this.value.length<5){
        elMsg.textContent='nombre de usuario muy corto';
    } else{
        elMsg.textContent='';
    }
}
var elusername=document.getElementById('username');
//elusername.onblur=checarusername;
  elusername.addEventListener('blur',checarusername,false); */
  /*var elusername= document.getElementById('username');
  var elMsg = document.getElementById('feedback');
  function check(min){
      if(elusername.value.length<min){
          elMsg.textContent='El nombre de usuaro debe tener '+min+' caracteres minimo';
      } else{
          elMsg.innerHTML='estoy loca';
      }
  } 
elusername.addEventListener('blur',function(){check(7);},false);*/

/*function gettarget(e){
    if(!e){
        e=window.event;
    }
    return e.target;
}
function itemDone(e){
    var target, elParent, elGrandparent;
    target=gettarget(e);
    elParent=target.parentNode;
    elGrandparent=target.parentNode.parentNode;
    elGrandparent.removeChild(elParent);
    e.preventDefault();
    var el =document.getElementById('shoppingList');
    el.addEventListener('click', function(e){itemDone(e);},false);
}*/
//No pude hacer que corriera
/*function setup(){
    var textInput;
    textInput=document.getElementById('username');
    textInput.focus;
}
window.addEventListener('load',setup,false);*/
/*var msg='<div class=\"header\"><a id=\"clase\" href="#">close x</a></div>';
msg+='<div><h2> sysyeejhekje</h2>';
msg+='sadlksddksdklds ddjñkhkshdslk';
msg+='dskhdilsfhlsgflgflj </div>';
var elnote =document.createElement('div');
elnote.setAttribute('id','note');
elnote.innerHTML=msg;
document.body.appendChild(elnote);
function dissmissnote(){
    document.body.removeChild(elnote);
}
var elclase =document.getElementById('close');
elclase.addEventListener('click',dissmissnote,false);*/
$(document).ready(function() {
    var myElements = $("#id01");
        $("#demo").text("The text from the id01 paragraph is: " + myElements[0].innerHTML);
  });