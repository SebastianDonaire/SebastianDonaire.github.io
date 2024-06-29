
    

// Funcion para ocultar la informacion de los pokemon
function hide() {
    document.querySelector(".proyecto-1").style.display = 'none';
    document.querySelector(".proyecto-2").style.display = 'none';
    document.querySelector(".proyecto-3").style.display = 'none';
}

document.querySelector(".proyecto1-button").onclick=function(){
    hide();
    document.querySelector(".proyecto-1").style.display = 'flex';
}
document.querySelector(".proyecto2-button").onclick=function(){
    hide();
    document.querySelector(".proyecto-2").style.display = 'flex';
}
document.querySelector(".proyecto3-button").onclick=function(){
    hide();
    document.querySelector(".proyecto-3").style.display = 'flex';
}