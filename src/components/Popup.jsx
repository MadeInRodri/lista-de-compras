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
    let miTotal = data.precio * data.cantidad;
    setListaProductos([
      ...listaProductos,
      {
        producto: data.producto,
        precio: data.precio,
        cantidad: data.cantidad,
        total: miTotal.toFixed(2),
      },
    ]);
    reset();
    setTotal(total + data.precio * data.cantidad);
    setDispay("hidden");
  };
  return (
    <section className="absolute w-dvw h-[90vh] flex justify-center items-center">
      <form
        className={
          display + " z-20 flex-col gap-3 p-5 m-5 bg-gray-800 rounded-lg"
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
            {...register("precio")}
          ></input>
        </article>
        <article className="grid grid-cols-3">
          <label>Cantidad:</label>
          <input
            required
            type="number"
            className="bg-amber-50 col-span-2 text-black p-1 rounded-sm"
            {...register("cantidad")}
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
