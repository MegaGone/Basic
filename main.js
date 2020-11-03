'use strict'

window.addEventListener('load', () => {

    const form = document.getElementById('formulario');

    form.addEventListener('submit', () => {

        // Recolectar los datos

        var numeros = document.getElementById('numeros');

        var n1 = parseInt(document.getElementById('first').value);
        var n2 = parseInt(document.getElementById('second').value);
        var ts = n1 + n2;
        var tr = n1 - n2;
        var tm = n1 * n2;
        var td = n1 / n2;

        //Validar datos

        if (n1 == null || n1 <= 0 || isNaN(n1) || n2 == null || n2 <= 0 || isNaN(n2)) {
            alert('Ingrese un numero correcto porfavor');
            form.reset();
        } else {

            // Resultados
            numeros.innerHTML = "<h4>" + n1 + " & " + n2 + "</h4>";

            var suma = document.querySelector('#suma');
            var resta = document.getElementById('resta');
            var mult = document.getElementById('mult');
            var div = document.getElementById('division');

            suma.innerHTML = ts;
            resta.innerHTML = tr;
            mult.innerHTML = tm;
            div.innerHTML = td;

            form.reset();
        }
    });

});