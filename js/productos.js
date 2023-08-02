/**
 * 
 * @param {*} id
 * @param {*} producto
 * @param {*} marca
 * @param {*} stock
 * @param {*} precioUnitario
 */
function productos(id, producto, stock, precioUnitario) {
    this.id = id
    this.producto = producto
    this.marca = marca
    this.stock = stock
    this.cantidad = 0
    this.precioUnitario = precioUnitario
}

const articulo = new productos(0, "Libreta", "Unicornio", 100, 120)
const articulo1 = new productos(1, "Notas", "Sirena", 50, 80)
const articulo2 = new productos(2, "Lapiceras de gel", 20, 210)
const articulo3 = new productos(3, "Cartuchera", "Floreada" 70, 190)
const articulo4 = new productos(4, "Bibliorato", "Pastel", 50, 120)
const articulo5 = new productos(5, "Block de notas", "Presonalizado" 50, 60)
const articulo6 = new productos(6, "Recetario", "Artesanal" 150, 300)
const articulo7 = new productos(7, "Cuaderno", "A5", 250, 90)
const articulo8 = new productos(8, "Portalapices", "Artesanal", 100, 190)

let prods = [articulo, articulo1, articulo2, articulo3, articulo4, articulo5, articulo6, articulo7, articulo8]


let carrito = [];
console.table(prods);

