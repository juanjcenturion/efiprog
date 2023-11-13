import asustuf from "../../assets/images/products/monitores/asus24tuf.jpg";
import corsair from '../../assets/images/products/memorias/corsair.jpg'
import kingston480 from '../../assets/images/products/almacenamiento/ssdkingston480.jpg'
import msi1650 from "../../assets/images/products/placas/msi1650.jpg"


export default function PurchaseConfirmation() {
  return (
    <div>
      <div className="container mx-auto  py-16">

        <section className=" py-16 rounded shadow-md mb-8">
          <div className="flex items-center justify-center">
          </div>
          <h2 className="text-2xl font-bold text-primary flex justify-center uppercase mb-4">
            ¡Gracias por tu compra!
          </h2>
          <p className="text-gray-600 flex justify-center">
            Tu pedido ha sido confirmado.
          </p>
          <p className="text-gray-600 flex justify-center">
            A continuación, encontrarás los detalles de tu compra:
          </p>
        </section>
      </div>
      <div className="container mx-auto p-4">
        {/* Sección de Detalles de la Compra */}
        <section className="bg-white p-8 rounded shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Detalles de la Compra
          </h2>
          <div className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
            <div className="w-29">
              <img src={asustuf} alt="product 6" className="w-full" />
            </div>
            <div className="w-1/3">
              <h2 className="text-gray-800 text-xl flex justify-center font-medium uppercase">ASUS 24 - TUF - VG24VQE</h2>
              <p className="text-gray-500 flex justify-center  text-sm">Disponibilidad: <span className="text-green-600">En Stock</span></p>
            </div>
            <div className="text-primary text-lg font-semibold">$183.000</div>
          </div>
          <p className="mt-4 text-xl font-bold text-gray-800">Total: $80.00</p>
        </section>

        {/* Sección para Valorar el Pedido */}
        <section className="bg-white p-8 rounded shadow-md mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            ¡Queremos tu opinión!
          </h2>
          <p className="text-gray-600 mb-4">
            Por favor, tómate un momento para valorar tu experiencia de compra:
          </p>
          {/* Agrega aquí tu formulario de valoración */}
        </section>
      </div>
    </div>
  );
}
