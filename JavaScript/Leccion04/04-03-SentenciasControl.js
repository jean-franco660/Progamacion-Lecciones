//sentencias if/else

let horaDia = 12;
let mensaje;

if (horaDia >=6 && horaDia <=11) {
    mensaje = "Buenos Dias";
}else if(horaDia >=12 && horaDia <=18){
    mensaje = "Buenas Tardes";
}else if(horaDia >=19 && horaDia <=24){
    mensaje = "Buenas Noches";
}else if(horaDia >=0 && horaDia < 6){
    mensaje = "DUERME POR DIOS!!!!";
}else{
    mensaje = "Valor Incorrecto"
}
console.log(mensaje);
