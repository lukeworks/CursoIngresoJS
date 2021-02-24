/*
--------------------------------------------------------
Lucas Gonzalez Dall Ora 1H - TP 4 Ferrete iluminación
--------------------------------------------------------
Enunciado:
Las lámparas están al mismo precio de $35 pesos final.
A. Si compra 6 o más lamparitas bajo consumo tiene un descuento del 50%.
B. Si compra 5 lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C. Si compra 4 lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D. Si compra 3 lamparitas bajo consumo marca "ArgentinaLuz" el descuento es del 15%, si es “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E. Si el importe final con descuento suma más de $120 se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje: ”IIBB Usted pago X”, siendo X el impuesto que se pagó.
 */
function CalcularPrecio () 
{
     var precioLampara;
     var cantidadLamparas;
     var marcas;
     var descuento;
     var precioConDescuento;
     var precioSinDescuento;
     var impuesto;
     var precioConImpuesto;

     precioLampara = 35;

     cantidadLamparas = document.getElementById("txtIdCantidad").value;
     cantidadLamparas = parseInt(cantidadLamparas);

     marcas = document.getElementById("Marca").value;
    // estoy estableciendo el proceso de datos que no fueron tomados, se toman mas abajo
     //precioConDescuento = (precioLampara - (precioLampara * descuento/100)) * cantidadLamparas;
     
     if(cantidadLamparas > 5)
     {
         descuento = 50;
     }
     else
     {
         if(cantidadLamparas == 5)
         {
            if(Marca == "ArgentinaLuz")
            {
                descuento = 40;
            }
            else
            {
                descuento = 30;
            }
         }
         else
         {
             if(cantidadLamparas == 4)
             {
                 if(Marca == "ArgentinaLuz" || Marca == "FelipeLamparas")
                 {
                     descuento = 25;
                 }
                 else
                 {
                     descuento = 20;
                 }
             }
             else
             {
                 if(cantidadLamparas == 3)
                 {
                     if(Marca == "ArgentinaLuz")
                     {
                         descuento = 15;
                     }
                     if (Marca == "FelipeLamparas")
                     {
                         descuento = 10;
                     }
                     else
                     {
                         descuento = 5;
                     }
                 }
                 if(precioConDescuento > 120)
                 {
                    impuesto = precioConDescuento * 10/100;
                    precioConImpuesto = precioConDescuento + impuesto;
                    txtIdprecioDescuento.value = "IIBB Usted pagó $" + precioConImpuesto + ", siendo " + impuesto + " el impuesto que se pagó.";
                 }
             }
            
         }
         precioSinDescuento = precioLampara * cantidadLamparas;
    txtIdprecioDescuento.value = "el precio es $" + precioSinDescuento;
     }

    precioConDescuento = (precioLampara - (precioLampara * descuento/100)) * cantidadLamparas;
    txtIdprecioDescuento.value = "el precio es $" + precioConDescuento;
     
}






/*if(cantidadLamparas < 5)
     {
        precioSinDescuento = precioLampara * cantidadLamparas;
        //txtIdprecioDescuento.value = "el precio es $" + precioSinDescuento;
     }
     else
     {
         if(cantidadLamparas > 5)
         {
             descuento = 50;
         }
         else
         {
             if(cantidadLamparas == 5)
             {
                 if(Marca == "ArgentinaLuz")
                 {
                     descuento = 40;
                 }
                 else
                 {
                     descuento = 30;
                 }
                // txtIdprecioDescuento.value = "el precio es $" + precioConDescuento;
             }
             if(cantidadLamparas == 4)
             {
                if(Marca == "ArgentinaLuz" || Marca == "FelipeLamparas")
                {
                    descuento = 25;
                }
                else
                {
                    descuento = 20;
                }
                if(cantidadLamparas == 3)
                {
                    if(Marca == "ArgentinaLuz")
                    {
                        descuento = 15;
                    }
                    if(Marca == "FelipeLamparas")
                    {
                        descuento = 10;
                    }
                    else
                    {
                        descuento = 5;
                    }
                   // txtIdprecioDescuento.value = "el precio es $" + precioConDescuento;
                }
             }
             else
             {
                 if(precioConDescuento > 120)
                 {
                    impuesto = precioConDescuento * 10/100;
                    precioConImpuesto = precioConDescuento + impuesto;
                    txtIdprecioDescuento.value = "IIBB Usted pagó $" + precioConImpuesto + ", siendo " + impuesto + " el impuesto que se pagó.";
                 }
             }
         }
     }*/