import asustuf from "../../assets/images/products/monitores/asus24tuf.jpg";
import corsair from '../../assets/images/products/memorias/corsair.jpg'
import kingston480 from '../../assets/images/products/almacenamiento/ssdkingston480.jpg'
import msi1650 from "../../assets/images/products/placas/msi1650.jpg"
import ConfirmDetail from "../confirmdetail/ConfirmDetail";


export default function PurchaseConfirmation() {
  return (
    <div>
      <div className="container mx-auto  py-16">

        <section className=" py-16 rounded shadow-md mb-8">
          <img src="src/assets/images/icons/marcar.png" className=" flex container w-44 pb-16 justify-center" />
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
      <ConfirmDetail/>
      <div className="container pt-16">
          <h2 className="text-2xl font-bold flex container justify-center text-primary uppercase mb-4">
          ¡Queremos tu opinión!
          </h2>
          <section className= "bg-white p-8 rounded shadow-md">
            <p className="text-gray-600 flex justify-center mb-2 pt-6">
              Por favor, tómate un momento para valorar tu experiencia de compra:
            </p>
            <div className="container justify-center">
              <div className="flex justify-center gap-1 text-2xl text-yellow-400">
                  <span><i className="fa-solid fa-star"></i></span>
                  <span><i className="fa-solid fa-star"></i></span>
                  <span><i className="fa-solid fa-star"></i></span>
                  <span><i className="fa-solid fa-star"></i></span>
                  <span><i className="fa-solid fa-star"></i></span>
              </div>
              <textarea
                rows="4"
                className="w-3/5 justify-center container px-4 py-6 mt-6 border rounded-md flex"
                placeholder="Ingrese su comentario aqui"
              ></textarea>
              <button
            className="mt-4 w-3/5 py-2 px-4 text-center text-md container flex justify-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
            >Valorar y salir</button>
            </div>
          </section>
        </div>
    </div>
  );
}
