import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  //usestate para printar na tela
  const [tela, setTela] = useState();
  
  
  //desabilita o botao - disabled
  const [butDisable, setButDisable] = useState(false);



  const [textoBut, settextoBut] = useState();

  //requisicao assincrona para chamar o dado da api
  const requisicao = async () => {
    try {
      //axios é usado para chemar os dados da api
      // {data } é o campo do objeto que contém o value que queremos pegar.
      settextoBut('Loading') //muda texto botao
      setButDisable(true); //botao desabilitado
      const { data } = await axios.get(
        "https://api.chucknorris.io/jokes/random"
      );

      //chama o value de data
      console.log(data.value);
      //muda texto botao
      settextoBut('Tell me a true')
      setTela(data.value);
      setButDisable(false); //botao habilitado depois da funcao executar
    } catch (err) {
      console.log("Erro na requisição. ", err);
    }
  };

  /*useffect ira executar, somente 
  uma vez ao carregar a pagina a funcao, fazendo com que a pagina noa inicie vazia.*/

  useEffect(() => {
    requisicao();
  }, []);

  

  return (
    <>
      <img
        src="https://media.tenor.com/uzp6E5mEqsQAAAAM/amazing-thumbs-up.gif"
        alt="chuck noris"
      />

      <h1>Chuck facts...</h1>
      {/* carrega do valor de 'tela' */}
      <h2>'{tela}'</h2>

      {/* ao clikar chama a funcao */}
      {/* disabled para desabilitar o botao */}
      <button disabled={butDisable} onClick={requisicao}>
      {textoBut} 
      {/* texto botao */}
      </button>
    </>
  );
}

export default App;
