let fija=document.getElementsByTagName('nav')[0];
let oculto=true;

    window.addEventListener('scroll',function(e){
        let ypantalla=window.pageYOffset;
    
        if ((ypantalla>200)&& (!oculto)){
            fija.classList.remove("mostrarnav");
            console.log('chao');
            oculto=true;
        }
        if ((ypantalla<200)&& (oculto)){
            fija.classList.add("mostrarnav");
            console.log('hola');
            oculto=false;
        }
    })

/*hay un problema con la funcion window.pageYoffset no estoy segura como calcula la altura.
Si recargo la pagina quiero que se vaya al inicio*/
