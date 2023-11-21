import { useState } from "react";

const App = (props) => {
  const [contadorValue, updateContador] = useState(0);
  // const contador = useState(0);
  // const contadorValue = contador[0];
  // const updateContador = contador[1];

  // setInterval(() => {
  //   updateContador(contadorValue + 1);
  // }, 2000);

  const Counter = ({numero}) => {
    return <h1>{numero}</h1>;
  };

  const handleClick = () => {
    updateContador(contadorValue + 1);
  };

  const reset = () => {
    updateContador(0);
  };
  let par = contadorValue % 2 === 0;
  return (
    <div>
      <Counter numero={contadorValue} />
      <small>{par}</small>
      <p>{par ? "Número par" : "Número impar"}</p>
      <button onClick={handleClick}>Click me</button>
      <button onClick={reset}>Reset</button>
      {/* <button
        onClick={(prevCont) => {
          updateContador((prevCont) => {
            console.log(prevCont);
            return prevCont + 1;
          });
        }}
      >
        Click me
      </button> */}
    </div>
  );
};

export default App;
