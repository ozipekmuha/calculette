<script>
    
    var nombre1, nombre2, signe, somme, calcul;


    nombre1 = parseFloat(prompt("Nombre 1 :"));
    signe = document.getElementById("calculette").innerHTML = prompt('operation');
    nombre2 = parseFloat(prompt("nombre2"));



 switch (signe){

     case '+':
        document.getElementById("calculette").innerHTML=(nombre2 + nombre1);
         break;

     case '-':
        document.getElementById("calculette").innerHTML =(nombre1 - nombre2);
         break;

     case '/':
    if (nombre2 == 0) {
        document.getElementById("calculette").innerHTML = ('pas possible');

        }
         else {
        document.getElementById("calculette").innerHTML = (nombre1 / nombre2);
         }
         break;

     case '*':
        document.getElementById("calculette").innerHTML =(nombre1 * nombre2);
        break;

    default:
        document.getElementById("calculette").innerHTML =('ton signe n\'existe pas !')
 }

    </script>