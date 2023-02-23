//Vamos a trabajar con JQuery.

let carrito = [];

function addCarrito(idPrenda){
    let carritoShow = {
        nombre: $("#" + idPrenda +"Nombre").text(),
        precio: $("#" + idPrenda + "Precio").text()
    };
    carrito.push(carritoShow)
    console.log(carrito);
} 

/*
$("#addCarrito").on("click", () => {
    let carritoShow = {
        nombre: $("#" + idPrenda +"Nombre").text(),
        precio: $("#" + idPrenda + "Precio").text()
    }
    carrito.push(carritoShow)
    console.log(carrito);
}) */

//sumar precios
/*
function sumaPrecio(){

    let result = 0;

    for(let i = 0; i < carrito.length; i++ ){
        result += parseInt(carrito[i].precio)
    }

    return result;
    
}

function mainCarrito(){

} */


function showCarrito(){
    let total = 0;
    for (let i = 0; i < carrito.length; i++) {
    $("#modal").append(`<p>${carrito[i].nombre}: ${carrito[i].precio}</p>`);
        total += parseInt(carrito[i].precio);
    }
    $("#modal").append(`<h4 class="text-danger " > Total : ${total}€</h4>`);
}