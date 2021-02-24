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
    var tipoDePeso;
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
        tipoDePeso = "Bajo peso";
    }
    else
    {
        if(IMC <= 24.9)
        {
            tipoDePeso = "Peso normal";
        }
        else
        {
            if(IMC <= 29.9)
            {
                tipoDePeso = "Preobesidad";
            }
            else
            {
                if(IMC <= 34.9)
                {
                    tipoDePeso = "Obesidad I";
                }
                else
                {
                    if(IMC <= 39.9)
                    {
                        tipoDePeso = "Obesidad II";
                    }
                    else
                    {
                        if(IMC <= 49.9)
                        {
                            tipoDePeso = "Obesidad III";
                        }
                        else
                        {
                            tipoDePeso = "Obesidad IV";
                        }
                    }
                }
            }
        }
    }
    alert(nombre + ", usted tiene "+ tipoDePeso + ".");
}