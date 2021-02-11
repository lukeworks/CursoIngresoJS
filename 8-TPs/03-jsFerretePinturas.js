/*
---------------------------------------
Lucas Gonzalez Dall Ora 1H - TP 3
---------------------------------------
3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var temperaturaFarenheit;
    temperaturaFarenheit = document.getElementById('txtIdTemperatura').value; // Nota: no olvidarme las comillas cuando uso getElementById..
    temperaturaFarenheit = parseFloat(temperaturaFarenheit);
    temperaturaFarenheit = temperaturaFarenheit.toFixed(3); //queda mas prolijo

    // Fórmula Farenheit a Celsius Ej: (32 °F − 32) × 5/9 = 0 °C
    // para hacer la conversión se deben restar 32 grados por ende debemos agregar un paso previo a la conversión..
    var restar32;
    restar32 = temperaturaFarenheit - 32;
    // restar32 = restar32.toFixed(3); No hace falta el toFixed acá ya que se aplica al final en conversionACelsius

    var conversionACelsius;
    conversionACelsius = restar32 * 5/9;
    conversionACelsius = conversionACelsius.toFixed(3);

    prompt(temperaturaFarenheit + " grados Farenheit" + " son " + conversionACelsius + " grados Celsius.");
}

function CentigradosFahrenheit () 
{
    var temperaturaCelsius;
    temperaturaCelsius = document.getElementById('txtIdTemperatura').value;
    temperaturaCelsius = parseFloat(temperaturaCelsius);
    temperaturaCelsius = temperaturaCelsius.toFixed(3);

    // Fórmula Celsius a Farenheit Ej: ºF = (ºC · 1,8) + 32
    // para hacer la conversión a Farenheit se deben multiplicar los grados Celsius por 1.8 por ende debemos agregar un paso previo a la conversión..
    var multiplicarCelsius = temperaturaCelsius * 1.8;

    var conversionAFarenheit;
    conversionAFarenheit = multiplicarCelsius + 32;
    conversionAFarenheit = conversionAFarenheit.toFixed(3);
    
    prompt(temperaturaCelsius + " grados Celsius" + " son " + conversionAFarenheit + " grados Farenheit.");
}
