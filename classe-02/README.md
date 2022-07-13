![](https://i.imgur.com/xG74tOh.png)

## Exercício de classe 🏫

### Fragmentos

```jsx
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

export default function App() {
    const [mostrando, setMostrando] = useState(false);

    return (
        <div>
            <h1>Meu app</h1>
            <button>{mostrando ? "Fechar" : "Abrir"} menu</button>

            {mostrando && (
                <div className="remover-div">
                    <button>Adicionar entrada</button>
                    <button>Remover entrada</button>
                </div>
            )}

            <dl>
                {glossario.map(entrada => (
                    <div className="remover-div">
                        <dt>{entrada.termo}</dt>
                        <dd>{entrada.definicao}</dd>
                    </div>
                ))}
            </dl>
        </div>
    );
}
```

Modifique o código acima usando fragmentos de forma a remover as `div`s com classe `remover-div`.

Reflexões para após resolver o exercício:

- Em que situação precisamos usar fragmentos no React?
[Análise Felipe Belisário]: para agrupamento de outros tags HTML (em especial para servir como elemento raíz no JSX).
- Quando usar `<>` vs `<Fragment>`?
[Análise Felipe Belisário]: A tag <> deve ser utilizada quando a necessidade é apenas a separação de conteúdo ou o agrupamento de tags HTML em um único elemento raíz no JSX. A tag <Fragment> deve ser usada quando é necessário atribuir classe ou outros atributos (como key) ao elemento.

---

Preencha a checklist para finalizar o exercício:

- [X] Resolver o exercício
- [X] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [X] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [X] Pushar os commits na sua branch na origem (`git push origin nome-da-branch`)
- [X] Realizar o pull request

###### tags: `React` `Fragment`