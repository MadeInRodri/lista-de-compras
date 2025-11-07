import React from "react";
import Swal from "sweetalert2";

export default function BtnLimpiar({ setListaProductos, setTotal }) {
  return (
    <button
      className="w-min px-4 py-2 h-min bg-rose-500 text-white text-xl rounded-xl z-20 active:opacity-25 transition flex items-center justify-center"
      onClick={() => {
        Swal.fire({
          title: "Estás seguro de que quieres limpiar el carrito?",
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: "Limpiar",
          denyButtonText: `Cancelar`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            setListaProductos([]);
            setTotal(0);
            Swal.fire("El Carrito ha sido limpiado", "", "success");
          } else if (result.isDenied) {
            Swal.fire("No se ha limpiado el carrito", "", "info");
          }
        });
      }}
    >
      Limpiar
    </button>
  );
}
