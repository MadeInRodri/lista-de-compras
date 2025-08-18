import React from "react";

export default function ContenedorProductos({
  setListaProductos,
  listaProductos,
  setTotal,
  total,
}) {
  return (
    <section className=" w-dvw m-2 gap-3 overflow-y-auto z-10">
      {listaProductos.length > 0 &&
        listaProductos.map((producto, index) => (
          <article
            key={index}
            className=" mt-3 bg-gray-800 grid grid-cols-12 text-center min-h-14 rounded-xl items-center"
          >
            <p className="col-span-4 border-e-2 border-white/10">
              {producto.producto}
            </p>
            <p className="col-span-1 border-e-2 border-white/10">
              {producto.cantidad}
            </p>
            <p className="col-span-2 border-e-2 border-white/10">
              {producto.precio}$
            </p>

            <p className="col-span-3">{producto.total}$</p>
            <button
              value={index}
              className="col-span-2 bg-red-700  h-[100%] rounded-e-xl"
              onClick={() => {
                setListaProductos(
                  listaProductos.filter((producto, i) => i !== index)
                );
                setTotal(Math.abs(total - producto.total));
              }}
            >
              X
            </button>
          </article>
        ))}
    </section>
  );
}
