function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        <h1 className="text-2xl font-bold">
          GameStore
        </h1>

        <div className="flex gap-6">
          <a href="#" className="hover:text-purple-400">
            Inicio
          </a>

          <a href="#" className="hover:text-purple-400">
            Juegos
          </a>

          <a href="#" className="hover:text-purple-400">
            Ofertas
          </a>

          <a href="#" className="hover:text-purple-400">
            Contacto
          </a>
        </div>

      </div>
    </nav>
  )
}

export default Navbar