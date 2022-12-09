function calcularGastos() {
// Pedimos al usuario que ingrese la cantidad de personas que pagaron el auto
let numPersonas = parseInt(prompt("¿Cuántas personas pagaron?"));

// Declaramos una variable para almacenar el total de lo que pagaron las personas
let total = 0;

// Declaramos un array para almacenar el pago de cada persona
let pagos = [];



    // Iteramos sobre cada una de las personas
    for (let i = 0; i < numPersonas; i++) {
        // Pedimos al usuario que ingrese cuánto pagó cada persona
        let pago = parseInt(prompt("¿Cuánto pagó la persona " + (i + 1) + "?"));
        // Sumamos el pago a la variable total
        total += pago;
        // Almacenamos el pago en el array pagos
        pagos.push(pago);
    }

    // Dividimos el total entre el número de personas para obtener la cantidad que debe pagar cada una
    let resultado = total / numPersonas;

    // Mostramos el resultado en pantalla para cada persona
    for (let i = 0; i < numPersonas; i++) {
        document.write("<br>")
        // Si el pago de la persona es mayor que el resultado, entonces le deben pagar
        if (pagos[i] > resultado) {
            document.write("La persona " + (i + 1) + " le deben pagar " + (pagos[i] - resultado));
        } else {
            // Si el pago de la persona es menor que el resultado, entonces debe pagar
            document.write("La persona " + (i + 1) + " debe pagar " + (resultado - pagos[i]));
        }
    }
}
function menu (){
    var html = `
    <button class ="botonCalcularGastos" onclick="calcularGastos()">Calcular gastos</button>
    `
    document.write(html);
}
menu();


// var contribuidores = []

// function menu (){
//     var html = `
//     <button onclick="nuevo()">Agregar nuevo</button>
//     <button onclick="mostrarContribuidores()">Mostrar contribuidores</button>
//     <button onclick="eliminarContacto()">Eliminar contribuidor</button>
//     <button onclick="calcularGastos()">Calcular gastos</button>
//     `;
//     output(html);
// }
// menu();

// function nuevo(){
//     var nombre = input("Nombre: ");
//     var pagado = input(`Total Pagado de ${nombre}: `);
//     contribuidores.push({
//         "nombre": nombre,
//         "pagado": pagado
//     })
// }

// function mostrarContribuidores(){
//     clear();
//     output("<br>");
//     for (var i = 0; i < contribuidores.length; i++){
//         output("<button onclick='detalles("+ i +")'>" +contribuidores[i]['nombre'] 
//         + " "  + contribuidores[i]["pagado"] + "</button>");
//     }
//     output("<br>")
//     output("<br>")
//     output("<button onclick='volverAlMenu()'>Volver al menu</button>");
// }

// function detalles(posicion) {
//     var contribuidor = contribuidores[posicion];
//     clear();
//     output("<br>");
//     output("Nombre: " + contribuidor['nombre']);
//     output("<br>");
//     output("pagado: " + contribuidor['pagado']);
//     output("<br>");
//     output("<button onclick='volverAlMenu()'>Volver al menu</button>");
// }

// function volverAlMenu() {
//     clear();
//     menu();
// }

// function eliminarContacto() {
//     var nombre = input("Nombre del contacto a eliminar");
//     var pagado = input("Apellido del contacto a eliminar");
//     var posicion = -1;
//     for (var i = 0; i < contribuidores.length; i++) {
//         if (contribuidores[i]["nombre"] == nombre && contribuidores[i]["pagado"] 
//         == pagado) {
//             posicion = i;
//         }
//     }
//     clear();
//     if (posicion != -1) {
//         contactos.splice(posicion, 1);
//     } else {
//         output("No se encontró el contacto");
//     }
//     menu();
// }


// function calcularGastos(){

// }