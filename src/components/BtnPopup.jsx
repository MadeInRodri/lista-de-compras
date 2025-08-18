import React from "react";

export default function BtnPopup({ display, setDisplay }) {
  return (
    <button
      className="absolute bottom-10 right-5 size-15 bg-emerald-600 text-white text-2xl rounded-md z-20 active:opacity-25 transition flex items-center justify-center"
      onClick={() => {
        display == "flex" ? setDisplay("hidden") : setDisplay("flex");
      }}
    >
      +
    </button>
  );
}
