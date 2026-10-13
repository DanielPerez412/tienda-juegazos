const formato = (n) => '$' + n.toLocaleString('es-CO')

function ProductCard({ nombre, precio, imagen, descuento = 0 }) {
  const precioFinal = descuento
    ? Math.round((precio * (1 - descuento / 100)) / 100) * 100
    : precio

  return (
    <div className="relative bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition">

      {descuento > 0 && (
        <span className="absolute top-3 left-3 z-10 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
          -{descuento}%
        </span>
      )}

      <div className="bg-gray-200 h-44">
        <img
          src={imagen}
          alt={nombre}
          referrerPolicy="no-referrer"
          loading="lazy"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.onerror = null
            e.currentTarget.src = 'https://placehold.co/460x215?text=Sin+imagen'
          }}
        />
      </div>

      <div className="p-5">

        <h3 className="text-xl font-bold mb-2">
          {nombre}
        </h3>

        <div className="flex items-baseline gap-2 mb-4">
          <p className="text-purple-600 text-lg font-bold">
            {formato(precioFinal)}
          </p>
          {descuento > 0 && (
            <p className="text-gray-400 line-through text-sm">
              {formato(precio)}
            </p>
          )}
        </div>

        <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">
          Comprar
        </button>

      </div>

    </div>
  )
}

export default ProductCard
