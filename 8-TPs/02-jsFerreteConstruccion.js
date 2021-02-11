/*
---------------------------------------
Lucas Gonzalez Dall Ora 1H - TP 2
---------------------------------------
2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambrar con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var ancho;
    var largo;

    ancho = txtIdLargo.value;
    largo = txtIdAncho.value;

    // Ojo! las medidas pueden no ser un número entero (va float)

    ancho = parseFloat(ancho);
    largo = parseFloat(largo);
/*
Terrible error! debería averiguar el permímetro para resolver este problema..
    var cantidadAlambre;

    cantidadAlambre = (ancho * largo) * 3; //*3 porque son 3 hilos de alambre
    cantidadAlambre = cantidadAlambre.toFixed(2);
*/
    var perimetro;
    perimetro = ancho * 2 + largo *2;
    var cantidadAlambre;
    cantidadAlambre = perimetro *3;
    cantidadAlambre = cantidadAlambre.toFixed(2);

    alert("La cantidad de alambre a comprar es: " + cantidadAlambre + " metros");
}

function Circulo () 
{
    var radio;
    
    radio = txtIdRadio.value;
    radio = parseFloat(radio);

    var alambradoCircular;

    // La circunferencia de un círculo se puede averiguar multiplicando pi ( p= 3.14) por el díametro del círculo.
    // se puede usar tambien Math.PI o const = 3.14
    var diametro;

    diametro = radio * 2;

    alambradoCircular = (diametro * (3.14)) *3; //*3 porque son 3 hilos de alambre
    alambradoCircular = alambradoCircular.toFixed(2);

    alert("La cantidad de alambre a comprar es: " + alambradoCircular + " metros")
}

function Materiales () 
{
    var anchoContrapiso;
    var largoContrapiso;

    anchoContrapiso = txtIdLargo.value;
    largoContrapiso = txtIdAncho.value;

    anchoContrapiso = parseFloat(anchoContrapiso);
    largoContrapiso = parseFloat(largoContrapiso);

/*
Terrible error! debería averiguar el árrea para resolver este problema..
    // NOTA: a las variables cemento y cal debo asignarles 2 valores a cada una para que "sepa" cuantas bolsas de cada material necesita en base a las medidas dadas

    cemento = anchoContrapiso *2;
    cemento = largoContrapiso * 2;
    cal = anchoContrapiso *2;
    cal = largoContrapiso * 3;

    // toFixed para que esté mas prolijo..
    anchoContrapiso = anchoContrapiso.toFixed(2);
    largoContrapiso = largoContrapiso.toFixed(2);
    cemento = cemento.toFixed(2);
    cal = cal.toFixed(2);
*/
    var area;
    area = anchoContrapiso * largoContrapiso;
    var cemento;
    var cal;
    cemento = area *2;
    cal = area *3;

    alert("Para un contrapiso de " + area + "m2" + " se necesitarán " + cemento + " bolsas de cemento " + "y " + cal + " bolsas de cal.");
}