import { useState, useEffect, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [delaySegundos, setDelaySegundos] = useState(1);
  const handleStep = useRef();

  //Atualiza a cada rendereização da tela
  handleStep.current = () => setCount(c => c + step);

  useEffect(() => {
    console.log(delaySegundos);
    const intervalId = setInterval(
      () => handleStep.current(),
      delaySegundos * 1000
    );

    return () => clearInterval(intervalId);
  }, [delaySegundos]);

  return (
    <div>
      <h1>{count}</h1>
      <label>
        Passo:
        <br />
        <input
          type="number"
          value={step}
          onChange={(ev) => setStep(ev.target.valueAsNumber)}
          min={0}
        />
      </label>
      <br />
      <label>
        Delay:
        <br />
        <input
          type="number"
          value={delaySegundos}
          onChange={(ev) => setDelaySegundos(ev.target.valueAsNumber)}
          min={1}
        />
      </label>
    </div>
  );
}

export default App;