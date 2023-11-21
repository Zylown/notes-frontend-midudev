import { useState } from "react";
import "./style.css";
//los componentes siempre fuera de otro componente, es mala practica
const WarningNotUsed = () => {
  return <h1>Todavía no se ha usado el contador</h1>;
};

const ListOfClicks = ({ clicks }) => {
  return <p>{clicks.join(", ")}</p>;
};

const INITIAL_COUNTER_STATE = {
  left: 0,
  right: 0,
  mensaje: "Hola bebeto",
};

const App = (props) => {
  //   const [left, setLeft] = useState(0);
  //   const [right, setRight] = useState(0);
  const [clicks, setClicks] = useState(INITIAL_COUNTER_STATE);
  //   const handleClickLeft = () => {
  //     setClicks({
  //       left: clicks.left + 1,
  //       right: clicks.right,
  //     });
  //   };

  const [clicks2, setClicks2] = useState([]);

  const handleClickLeft = () => {
    const newClicksState = {
      ...clicks, //queremos todas las propiedades de clicks
      left: clicks.left + 1,
    };
    setClicks(newClicksState);
    setClicks2((prevClicks) => {
      //   return prevClicks.concat("L");
      return [...prevClicks, "L"];
      /*
      significa que se están copiando todos los elementos anteriores del array prevClicks (que corresponde al estado anterior de clicks2) y luego, después de la coma, se agrega una "L" al final del nuevo array. En otras palabras, esta línea de código agrega la letra "L" al final del array clicks2 sin modificar los elementos anteriores.
      */
    });
  };

  const handleClickRight = () => {
    setClicks({
      ...clicks, //spread operator
      right: clicks.right + 1,
    });
    setClicks2((prevClicks) => {
      //   return prevClicks.concat("L");
      return [...prevClicks, "R"]; //agregar un nuevo elemento al array
    });
  };

  const hanndleReset = () => {
    setClicks(INITIAL_COUNTER_STATE);
    setClicks2([]);
  };

  return (
    <div className="Container">
      {clicks.left}
      <button onClick={handleClickLeft}>left</button>
      <button onClick={handleClickRight}>right</button>
      {clicks.right}
      <p>
        <button onClick={hanndleReset}>Reset</button>
      </p>
      <br></br>
      <br></br>
      <p>Clicks totales: {clicks2.length}</p>
      {clicks2.length === 0 ? (
        <WarningNotUsed />
      ) : (
        <ListOfClicks clicks={clicks2} />
      )}
      {/* {clicks2.join(", ")} */}
      {/* <p>{clicks.mensaje}</p> */}
    </div>
  );
};

export default App;
