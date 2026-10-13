import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Promocion from './components/Promocion'
import ProductCard from './components/ProductCard'
import Categorias from './components/Categorias'
import Footer from './components/Footer'

const steam = (id) =>
  `https://cdn.cloudflare.steamstatic.com/steam/apps/${id}/header.jpg`

const productos = [
  {
    nombre: 'maincra',
    precio: 89900,
    descuento: 15,
    imagen:
      'https://static.wikia.nocookie.net/memes-pedia/images/1/17/Descarga-3.jpg/revision/latest?cb=20200818170944&path-prefix=es',
  },
  {
    nombre: 'FIFA 26',
    precio: 199900,
    imagen:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH9g24sLED3F5V4BN50Tl2swVg4L1ULJzNv7l1YI3660w0b32e2qBxRN8&s=10',
  },
  {
    nombre: 'Mario Kart',
    precio: 159900,
    descuento: 20,
    imagen:
      'https://es.kotaku.com/app/uploads/2025/07/170a3a61fd181633f0c38f20bbebfc74.jpg',
  },
  {
    nombre: 'Elden Ring',
    precio: 159900,
    descuento: 25,
    imagen: steam(1245620),
  },
  {
    nombre: 'Cyberpunk 2077',
    precio: 119900,
    descuento: 30,
    imagen: steam(1091500),
  },
  {
    nombre: 'Red Dead Redemption 2',
    precio: 149900,
    imagen: steam(1174180),
  },
  {
    nombre: "Baldur's Gate 3",
    precio: 189900,
    descuento: 10,
    imagen: steam(1086940),
  },
  {
    nombre: 'Hollow Knight',
    precio: 39900,
    imagen: steam(367520),
  },
  {
    nombre: 'Stardew Valley',
    precio: 29900,
    descuento: 10,
    imagen: steam(413150),
  },
]

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">

      <Navbar />

      <Banner />

      <Promocion />

      <Categorias />

      <section className="max-w-6xl mx-auto px-6 py-10">

        <h2 className="text-3xl font-bold text-center mb-8">
          Videojuegos destacados
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {productos.map((p) => (
            <ProductCard key={p.nombre} {...p} />
          ))}
        </div>

      </section>

      <Footer />

    </div>
  )
}

export default App
