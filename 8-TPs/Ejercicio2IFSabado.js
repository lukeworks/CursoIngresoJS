/*
--------------------------------------------------------
Lucas Gonzalez Dall Ora 1H - Ej. 2 Sabado 13/2/2021
--------------------------------------------------------
Enunciado:
2- con if
ingresar el nombre y los datos requeridos para calcular el IMC , e informar a la persona si es:
Bajo peso
Peso normal
Preobesidad
Obesidad I
Obesidad II
Obesidad III
 */
function CalcularIMC () 
{
    var nombre;
    var altura;
    var peso;
    var IMC;
    //var nivelDeObesidad;
    //(num / Math.pow(10, length)).toFixed(length).substr(2);

    nombre = prompt("Ingrese su nombre por favor:");
    //altura = Math.pow
    altura = prompt("Ingrese su altura por favor (en metros):");
    altura = parseFloat(altura);

    peso = prompt("Ingrese su peso por favor:");
    peso = parseFloat(peso);

    // fórmula INC = peso / altura2 (al cuadrado)

    IMC = peso / (altura * altura);
    IMC = parseFloat(IMC);

    if(IMC <18.5)
    {
        alert(nombre + ", usted tiene Bajo peso.");
    }
    else
    {
        if(IMC <= 24.9)
        {
            alert(nombre + ", usted tiene Peso normal.");
        }
        else
        {
            if(IMC <= 29.9)
            {
                alert(nombre + ", usted tiene Preobesidad.");
            }
            else
            {
                if(IMC <= 34.9)
                {
                    alert(nombre + ", usted tiene Obesidad I.");
                }
                else
                {
                    if(IMC <= 39.9)
                    {
                        alert(nombre + ", usted tiene Obesidad II.");
                    }
                    else
                    {
                        if(IMC <= 49.9)
                        {
                            alert(nombre + ", usted tiene Obesidad III.");
                        }
                        else
                        {
                            alert(nombre + ", usted tiene Obesidad IV.")
                        }
                    }
                }
            }
        }
    }
}