/*
6
1 pt. (SWITCH + IF Se ingresa una hora. Si está entre las 6 y las 11 mostrar: “es de mañana”, si es desde
las 12 a las 19: "es de tarde", de lo cont rario informar que es de noche. Informar si la hora no es válida Si
es de noche y la hora es menor a 24 mostrar se debe agregar el mensaje: "a dormir".
*/
function mostrar()
{
var hora;

hora = document.getElementById("laHora").value;
hora = parseInt(hora);

if(hora >= 6 && hora <= 11)
{
    alert("es de mañana");
}
else
{
    if(hora >= 12 && hora <= 19)
    {
        alert("es de tarde");
    }
    else
    {
        alert("es de noche");
    }
}
switch (hora) {
    case value:
        
        break;

    default:
        break;
}
}
