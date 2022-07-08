

function numeroRandom(minN,maxN){
    var numRandom=Math.floor(Math.random() *(maxN-minN+1))+minN;
    return numRandom;
}

var canvasjs = document.getElementById("area_canvas");
var context = canvasjs.getContext("2d");

var fondo = {
    url: "./Assets/tile.png",
    cargaOK: false 
}
var vaca = {
    url: "./Assets/vaca.png",
    cargaOK: false 
}
var pollo = {
    url: "./Assets/pollo.png",
    cargaOK: false 
}
var cerdo = {
    url: "./Assets/cerdo.png",
    cargaOK: false 
}

var numVacas= numeroRandom(1,10);
var numPollos= numeroRandom(1,10);
var numCerdos= numeroRandom(1,10);


fondo.objeto = new Image();
fondo.objeto.src = fondo.url;
fondo.objeto.addEventListener("load",cargarFondo);

vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load",cargarVacas);

pollo.objeto = new Image();
pollo.objeto.src = pollo.url;
pollo.objeto.addEventListener("load",cargarPollos);

cerdo.objeto = new Image();
cerdo.objeto.src = cerdo.url;
cerdo.objeto.addEventListener("load",cargarCerdos);


function cargarFondo(){
    fondo.cargaOK=true;
    dibujar();
}
function cargarVacas(){
    vaca.cargaOK=true;
    dibujar();
    }
function cargarPollos(){
    pollo.cargaOK=true;
    dibujar();
     }
function cargarCerdos(){
    cerdo.cargaOK=true;
    dibujar();
    }
function dibujar(){

    if(fondo.cargaOK){
        context.drawImage(fondo.objeto,0,0);
    }
    if(vaca.cargaOK){
        for(var v=0;v<numVacas;v++){
            var x = numeroRandom(0,7);
            var y = numeroRandom(0,7);
            x = x*60;
            y = y*60;
            context.drawImage(vaca.objeto,x,y);
        }
    }
    if(pollo.cargaOK){
        for(var v=0;v<numPollos;v++){
            var x = numeroRandom(0,7);
            var y = numeroRandom(0,7);
            x = x*60;
            y = y*60;
            context.drawImage(pollo.objeto,x,y);
        }    }
    if(cerdo.cargaOK){
        for(var v=0;v<numCerdos;v++){
            var x = numeroRandom(0,7);
            var y = numeroRandom(0,7);
            x = x*60;
            y = y*60;
            context.drawImage(cerdo.objeto,x,y);
        }    }
}