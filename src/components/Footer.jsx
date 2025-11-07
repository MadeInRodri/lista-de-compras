import React from "react";
import BtnPopup from "./BtnPopup";
import TextTotal from "./TextTotal";
import BtnLimpiar from "./BtnLimpiar";

export default function Footer({
  display,
  setDisplay,
  total,
  setTotal,
  setListaProductos,
}) {
  return (
    <footer className=" items-center justify-around flex h-[10vh]">
      <BtnPopup display={display} setDisplay={setDisplay}></BtnPopup>
      <TextTotal total={total}></TextTotal>
      <BtnLimpiar
        setListaProductos={setListaProductos}
        setTotal={setTotal}
      ></BtnLimpiar>
    </footer>
  );
}
