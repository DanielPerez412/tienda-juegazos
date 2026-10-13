function Promocion() {
  return (
    <section className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white py-6 px-6">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">

        <div>
          <h3 className="text-2xl md:text-3xl font-extrabold">
            🔥 Semana Gamer: hasta 30% de descuento
          </h3>
          <p className="text-sm md:text-base">
            Envío gratis en compras superiores a $150.000
          </p>
        </div>

        <div className="bg-white text-orange-600 font-bold px-5 py-3 rounded-lg border-2 border-dashed border-orange-500">
          Cupón: GAMER30
        </div>

      </div>

    </section>
  )
}

export default Promocion
