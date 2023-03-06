import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const esto = [
    { img: "uno", name: "uno", id: 1 },
    { img: "dos", name: "dos", id: 2 },
    { img: "tres", name: "tres", id: 3 },
    { img: "cuatro", name: "cuatro", id: 4 },
    { img: "cinco", name: "cinco", id: 5 },
    { img: "uno", name: "uno", id: 6 },
    { img: "dos", name: "dos", id: 7 },
    { img: "tres", name: "tres", id: 8 },
    { img: "cuatro", name: "cuatro", id: 9 },
    { img: "cinco", name: "cinco", id: 10 },
  ];
  const [array, setArray] = useState([].sort(() => Math.random() - 0.5));
  const [seleccionado, setSeleccionado] = useState([]);
  const [iguales, setIguales] = useState([]);
  const [idselected, setIdselected] = useState([]);
  const [ok, setOk] = useState([]);
  const [finish, setFinish] = useState(false);

  const seleccionar = (id) => {
    let pr = "";
    for (let i = 0; i < esto.length; i++) {
      if (esto[i].id == id) {
        setSeleccionado(seleccionado.concat(id));
        setIguales(iguales.concat(esto[i].name));
        setIdselected(idselected.concat(esto[i].id));
        pr = esto[i].name;
        iguales.includes(pr) && !idselected.includes(esto[i].id)
          ? (setOk(ok.concat(pr)),
            setTimeout(() => {
              setIguales([]);
              setSeleccionado([]);
              setIdselected([]);
            }, 1000))
          : iguales[0] != iguales[1] &&
            setTimeout(() => {
              setIguales([]);
              setIdselected([]);
              setSeleccionado([]);
            }, 1000);
      }
    }
    console.log(pr);
  };
  const felicidades = () => {
    ok.length == 5 && setFinish(true);
  };

  useEffect(() => {
    felicidades();
  }, [ok]);
  const funciones = (id) => {
    idselected.length < 2 && seleccionar(id), felicidades();
  };

  const estart = () => {
    setArray(esto.sort(() => Math.random() - 0.5));
    setSeleccionado([]);
    setFinish(false);
    setIdselected([]);
    setOk([]);
  };
  console.log(idselected, ok);
  return (
    <div className="App">
      <h2>hola</h2>
      {finish ? (
        <h3>felicidades!! terminaste</h3>
      ) : (
        <>
          {array.map((e) => (
            <h3 className="carta" key={e.id} onClick={() => funciones(e.id)}>
              {(seleccionado.includes(e.id) && seleccionado.length <= 2) ||
              ok.includes(e.name)
                ? e.img
                : "memo"}
            </h3>
          ))}
        </>
      )}

      <button onClick={estart}>start</button>
    </div>
  );
}

export default App;
