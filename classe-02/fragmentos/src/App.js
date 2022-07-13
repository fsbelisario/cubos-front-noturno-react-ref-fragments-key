import { Fragment } from 'react';
import { useState } from 'react';

const glossario = [
  {
    termo: "HTML",
    definicao:
      "Linguagem de marcação responsável por definir a estrutura de uma página web"
  },
  {
    termo: "CSS",
    definicao: "Linguagem responsável por definir o estilo de uma página web"
  },
  {
    termo: "Javascript",
    definicao:
      "Linguagem de programação responsável por ditar o comportamento de uma página web"
  }
];

function App() {
  const [mostrando, setMostrando] = useState(false);

  return (
    <div>
      <h1>Meu app</h1>
      <button>{mostrando ? "Fechar" : "Abrir"} menu</button>

      {mostrando && (
        <Fragment className="remover-div">
          <button>Adicionar entrada</button>
          <button>Remover entrada</button>
        </Fragment>
      )}

      <dl>
        {glossario.map(entrada => (
          <Fragment className="remover-div">
            <dt>{entrada.termo}</dt>
            <dd>{entrada.definicao}</dd>
          </Fragment>
        ))}
      </dl>
    </div>
  );
}

export default App;
