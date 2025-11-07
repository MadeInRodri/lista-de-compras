import React from "react";

export default function BtnPopup({ display, setDisplay }) {
  return (
    <button
      className="w-min px-4 py-2 h-min bg-emerald-600 text-white text-xl rounded-xl z-20 active:opacity-25 transition flex items-center justify-center"
      onClick={() => {
        display == "flex" ? setDisplay("hidden") : setDisplay("flex");
      }}
    >
      Agregar
    </button>
  );
}
