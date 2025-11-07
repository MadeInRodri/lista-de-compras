import { useEffect, useState } from "react";
import "./index.css";
import Popup from "./components/Popup";
import BtnPopup from "./components/BtnPopup";
import ContenedorProductos from "./components/ContenedorProductos";
import Header from "./components/Header";
import TextTotal from "./components/TextTotal";
import Footer from "./components/Footer";
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
    <div className="h-[100dvh] flex flex-col justify-between">
      <Header></Header>
      <main className="flex bg-white rounded-t-3xl h-[100%] overflow-y-auto ">
        {/* <BtnPopup display={display} setDisplay={setDisplay}></BtnPopup>
        <TextTotal total={total}></TextTotal> */}
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
      <Footer
        display={display}
        setDisplay={setDisplay}
        total={total}
        setTotal={setTotal}
        setListaProductos={setListaProductos}
      ></Footer>
    </div>
  );
}

export default App;
