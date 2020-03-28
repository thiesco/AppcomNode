import React from 'react';

// import Logon from './pages/Logon'; //nao e preciso index que sempre o ficheiro procurado e o index
import './global.css';
import Routes from './routes';

function App() {

  return (
    <Routes/>

  );
}

export default App;

/**  Experiencias com JSX
 * 
 * import React,{useState} from 'react';// use state permite alterar o valor sem refrescar a pagina


import Header from './Header'; primeia expreriencia
// JSX (java script e xml) html intregado na java script
 * 
 * function App() {
const [count, setCount] = useState(0);// usestate retorna uma Array[valor, fucnçãoDeActualição]

function increment(){
  setCount(count + 1)//Dessa forma posso ter actualização da variavel
}
  return (
    <div>
    <Header>
      Contador: {count}
          </Header>
    <button onClick={increment}>Incrementar</button>
    </div>
  );
}
*/