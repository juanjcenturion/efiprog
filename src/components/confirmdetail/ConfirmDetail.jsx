export default function ConfirmDetail() {
    return (
        <div className="container mx-auto p-4">
        {/* Sección de Detalles de la Compra */}
        <section className=" p-8 rounded">
          <h2 className="text-2xl font-bold flex justify-center text-primary uppercase mb-4">
            Detalles de la Compra
          </h2>
          <div className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
            <h2 className="text-gray-800 text-xl flex justify-center font-medium uppercase">ASUS 24 - TUF - VG24VQE</h2>
            <div className="text-primary text-lg font-semibold">$183.000</div>
          </div>

          <div className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
            <h2 className="text-gray-800 text-xl font-medium uppercase">Corsair - DDR4 - 16GB (2x8GB) - 2666MHz</h2>

            <div className="text-primary text-lg font-semibold">$52.500</div>
          </div>

          <div className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
            <h2 className="text-gray-800 text-xl font-medium uppercase">SSD Kingston - 480GB - A400</h2>
            <div className="text-primary text-lg font-semibold">$31.500</div>
          </div>
          <div className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
            <h2 className="text-gray-800 text-xl font-medium uppercase">MSI GeForce - GTX 1650 - 4GB</h2>
            <div className="text-primary text-lg font-semibold">$204.700</div>
          </div>
        </section>
      </div>
    )
} 