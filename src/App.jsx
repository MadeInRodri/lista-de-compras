import { useEffect, useState } from "react";
import "./index.css";
import Popup from "./components/Popup";
import BtnPopup from "./components/BtnPopup";
import ContenedorProductos from "./components/ContenedorProductos";
import Header from "./components/Header";
import TextTotal from "./components/TextTotal";

function App() {
  const [display, setDisplay] = useState("hidden");
  const [listaProductos, setListaProductos] = useState(() => {
    const productos = localStorage.getItem("listaProductos");
    return productos ? JSON.parse(productos) : [];
  });
  const [total, setTotal] = useState(() => {
    const miTotal = localStorage.getItem("total");
    return miTotal ? JSON.parse(miTotal) : 0;
  });

  useEffect(() => {
    localStorage.setItem("listaProductos", JSON.stringify(listaProductos));
    localStorage.setItem("total", JSON.stringify(total));
  }, [listaProductos, total]);

  return (
    <>
      <Header></Header>
      <main className="flex h-[90vh] bg-white rounded-t-3xl ">
        <BtnPopup display={display} setDisplay={setDisplay}></BtnPopup>
        <TextTotal total={total}></TextTotal>
        <Popup
          display={display}
          setDispay={setDisplay}
          listaProductos={listaProductos}
          setListaProductos={setListaProductos}
          total={total}
          setTotal={setTotal}
        ></Popup>
        <ContenedorProductos
          setListaProductos={setListaProductos}
          listaProductos={listaProductos}
          setTotal={setTotal}
          total={total}
        ></ContenedorProductos>
      </main>
    </>
  );
}

export default App;
