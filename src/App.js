import './App.css';
import HellWorld from './components/HelloWorld';
import Pessoa from './components/Pessoa';

function App() {
  
  const NAME = "edvaldo".toLocaleUpperCase;

  function sum(a, b){
    return a + b
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <h1>Alterando o JSX</h1>
      <p><h1>OI, {NAME}</h1></p>
      <p>soma: {sum(2, 4)}</p>
      <img src={url} alt="Minha Imagem" />
      <HellWorld />
      <Pessoa nome="Vunge" idade="27" profissao="Programador" foto="https://via.placeholder.com/150"/>
    </div>
  );
}

export default App;
