/*
5
1 p t ( pedir el ingreso de un planeta del sistema solar
Si es la tierra mostrar " acá vivimos". Si es tá más cerca del sol, " acá hace más calor". Si está más lejos
del sol, " acá hace más frio". Si no es un planeta valido informarlo.
Aclaración: los planetas se ingresan en minúscula (Mercurio y Venus están antes que la tierra).
*/
function mostrar()
{
var planeta;

planeta = prompt("Por favor, ingrese un planeta:");

switch (planeta) 
{
    case "tierra":
        alert("acá vivimos");
        break;
    case "mercurio":
    case "venus":
    case "marte":
        alert("acá hace más calor");
        break;
    case "jupiter":
    case "saturno":
    case "urano":
    case "neptuno":
    case "pluton":
        alert("acá hace más frio");
        break;
    default:
        alert("No ha ingresado un planeta válido.");
        break;
}
}
