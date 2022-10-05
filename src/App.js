import './App.css';
// import HellWorld from './components/HelloWorld';
// import List from './components/List';
// import Pessoa from './components/Pessoa';
import Evento from './components/Evento';
import Form from './components/Form';

function App() {
  
  /*
  const NAME = "edvaldo".toLocaleUpperCase;

  function sum(a, b){
    return a + b
  }

  const url = 'https://via.placeholder.com/150'
*/
  
return (
    <div className="App">
      <h1>Testando Eventos.</h1>
      <Evento />
      <Form />
    </div>
  );
}

export default App;
