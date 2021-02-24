/*
--------------------------------------------------------
Lucas Gonzalez Dall Ora 1H - Ej. 1 Sabado 13/2/2021
--------------------------------------------------------
Enunciado:
1-con if
pedir a una persoan que fue de vaciones , la distancia que viajo y el tiempo que tardo, para calcular la velocidad
e informar:
60 km/hr = muy lento
hata 80km/h= lento
hasta 100= buen ritmo
hasta 120= ahi de la ley
mas = eso no se hace
 */
function CalcularVelocidad () 
{
     var distancia;
     var tiempo;
     var velocidad;

     distancia = prompt ("cuantos KM recorriste?");
     distancia = parseFloat(distancia);

     tiempo = prompt ("cuanto tiempo tardaste?");
     tiempo = parseFloat(tiempo);

     // Fórmula: velocidad = distancia / tiempo

     velocidad = distancia / tiempo;
     velocidad = parseFloat(velocidad);

     if (velocidad < 61)
     {
         alert("Muy lento");
     }
     else
     {
         if(velocidad < 81)
         {
             alert("Lento");
         }
         else
         {
             if(velocidad < 101)
             {
                 alert("Buen ritmo");
             }
             else
             {
                 if(velocidad < 121)
                 {
                     alert("Ahí de la ley");
                 }
                 else
                 {
                    alert("Eso no se hace");
                 }
             }
         }
     }
     
}