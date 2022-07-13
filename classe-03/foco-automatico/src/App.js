import { useRef, useState } from 'react';

function App() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const inputRef1 = useRef();
  const inputRef2 = useRef();

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={ev => {
        ev.preventDefault();
        if (!inputRef1.current.value) {
          inputRef1.current.focus();
        } else {
          if (!inputRef2.current.value) {
            inputRef2.current.focus();
          } else {
            alert("Sucesso!")
          }
        }

      }}>
        <label>
          Usuário
          <input ref={inputRef1} value={usuario} onChange={ev => setUsuario(ev.target.value)} />
        </label>
        <label>
          Senha
          <input ref={inputRef2} type="password" value={senha} onChange={ev => setSenha(ev.target.value)} />
        </label>
        <button>Fazer login</button>
      </form>
    </div>
  );
}

export default App;