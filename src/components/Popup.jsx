import React from "react";
import { useForm } from "react-hook-form";

export default function Popup({
  display,
  setDispay,
  listaProductos,
  setListaProductos,
  total,
  setTotal,
}) {
  const { register, handleSubmit, reset } = useForm();
  const registrarProducto = (data) => {
    let cantidadValida =
      !isNaN(data.cantidad) && data.cantidad > 0 ? data.cantidad : 1;
    let miTotal = data.precio * cantidadValida;

    setListaProductos([
      ...listaProductos,
      {
        producto: data.producto,
        precio: data.precio,
        cantidad:
          !isNaN(data.cantidad) && data.cantidad > 0 ? data.cantidad : 1,
        total: parseFloat(miTotal.toFixed(2)),
      },
    ]);
    reset();
    setTotal(total + parseFloat(miTotal.toFixed(2)));
    setDispay("hidden");
  };
  return (
    <section className="absolute top-0 h-[100vh] w-dvw flex justify-center items-center ">
      <form
        className={
          display +
          " z-20 flex-col gap-3 p-5 m-5 bg-gray-800 rounded-lg border-2 border-amber-50"
        }
        onSubmit={handleSubmit((data) => registrarProducto(data))}
      >
        <article className="grid grid-cols-3">
          <label className="">Producto:</label>
          <input
            required
            type="text"
            className="bg-amber-50 col-span-2 text-black p-1 rounded-sm"
            {...register("producto")}
          ></input>
        </article>
        <article className="grid grid-cols-3">
          <label>Precio:</label>
          <input
            required
            type="number"
            step="any"
            min="0"
            className="bg-amber-50 col-span-2 text-black p-1 rounded-sm"
            {...register("precio", { valueAsNumber: true })}
          ></input>
        </article>
        <article className="grid grid-cols-3">
          <label>Cantidad:</label>
          <input
            required
            type="number"
            step="1"
            min="0"
            className="bg-amber-50 col-span-2 text-black p-1 rounded-sm"
            {...register("cantidad", { valueAsNumber: true })}
          ></input>
        </article>
        <button
          type="submit"
          className="bg-emerald-600 p-2 rounded-md transition active:bg-emerald-700"
        >
          Agregar
        </button>
      </form>
    </section>
  );
}
