import React from "react";

export default function ContenedorProductos({
  setListaProductos,
  listaProductos,
  setTotal,
  total,
}) {
  return (
    <section className=" w-dvw m-2 flex flex-col sm:justify-center sm:flex-wrap sm:flex-row gap-3 overflow-y-auto z-10">
      {listaProductos.length > 0 &&
        listaProductos.map((producto, index) => (
          // <article
          //   key={index}
          //   className=" mt-3 bg-gray-800 grid grid-cols-12 text-center min-h-14 rounded-xl items-center"
          // >
          //   <p className="col-span-4 border-e-2 border-white/10">
          //     {producto.producto}
          //   </p>
          //   <p className="col-span-1 border-e-2 border-white/10">
          //     {producto.cantidad}
          //   </p>
          //   <p className="col-span-2 border-e-2 border-white/10">
          //     {producto.precio}$
          //   </p>

          //   <p className="col-span-3">{producto.total}$</p>
          //   <button
          //     value={index}
          //     className="col-span-2 bg-red-700  h-[100%] rounded-e-xl"
          //     onClick={() => {
          //       setListaProductos(
          //         listaProductos.filter((producto, i) => i !== index)
          //       );
          //       setTotal(Math.abs(total - producto.total));
          //     }}
          //   >
          //     X
          //   </button>
          // </article>
          <article
            key={index}
            className=" flex bg-gray-800 sm:h-min sm:w-[20rem] flex-col px-5 p-3 gap-2 border-2 rounded-xl text-lg"
          >
            <p className="text-center font-semibold text-2xl">
              {producto.producto}
            </p>
            <p className="">Cantidad: {producto.cantidad}</p>
            <p className="">Precio: {producto.precio}$</p>

            <p className="col-span-3">Total: {producto.total}$</p>
            <button
              value={index}
              className=" bg-rose-500 text-white px-8 py-2 w-fit self-end rounded-xl font-semibold "
              onClick={() => {
                setListaProductos(
                  listaProductos.filter((producto, i) => i !== index)
                );
                setTotal(Math.abs(total - producto.total));
              }}
            >
              Borrar
            </button>
          </article>
        ))}
    </section>
  );
}
