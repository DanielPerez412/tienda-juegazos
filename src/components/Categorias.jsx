function Categorias() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10">

      <h2 className="text-3xl font-bold text-center mb-8">
        Categorías
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        <div className="bg-gray-900 text-white p-6 rounded-xl text-center">
          Acción
        </div>

        <div className="bg-gray-900 text-white p-6 rounded-xl text-center">
          Carreras
        </div>

        <div className="bg-gray-900 text-white p-6 rounded-xl text-center">
          Aventura
        </div>

        <div className="bg-gray-900 text-white p-6 rounded-xl text-center">
          +18
        </div>

      </div>

    </section>
  )
}

export default Categorias