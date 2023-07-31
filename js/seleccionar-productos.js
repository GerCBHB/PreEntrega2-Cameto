let totalCarrito;
let cantidadSeleccionada;
/**
 * @param {Array} productosDisponibles
 * @returns {Object}
 */





function obtenerProductosSeleccionados(productosDisponibles) {

	const productosSeleccionados = {};
	let seguirAgregando = true;

	while (seguirAgregando) {
		let msgProductsNames;
		prods.forEach((prod,index) => msgProductsNames += `
		${index} ${prod.marca}`)
		let eleccion = parseInt(prompt("Seleccione un artículo: " + msgProductsNames))

		let existeEnElCarrito = carrito.find(prod => prod.id === eleccion)

		if (existeEnElCarrito) {
			cantidadSeleccionada = parseInt(prompt("Cuantos artículos desea llevar?")) 
			existeEnElCarrito.cantidad += cantidadSeleccionada
		} else { 
			let prodSeleccionado = prods.find(prod => prod.id === eleccion)
			cantidadSeleccionada = parseInt(prompt("Cuantos artículos desea llevar?")) 
			prodSeleccionado.cantidad = cantidadSeleccionada
			carrito.push(prodSeleccionado)
		}

		totalCarrito = carrito.reduce((acc,prod) => acc + (prod.precioUnitario * prod.cantidad),0)
		console.log(totalCarrito);

		const agregarOtroArticulo = prompt("¿Deseas agregar otro artículo? (s/n)").toLowerCase();
		seguirAgregando = agregarOtroArticulo === "s";
	}
	console.table(carrito);
	totalCarrito = carrito.reduce((acc,prod) => acc + (prod.precioUnitario * prod.cantidad),0)
	console.log("Total carrito: " + totalCarrito)


	return productosSeleccionados;
}
const prueba = obtenerProductosSeleccionados(productos);
console.log(prueba)