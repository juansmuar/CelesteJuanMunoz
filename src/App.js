import "./components/NavBar.css"
import './App.css';

import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer 
        name='Torta de Chocolate'
        price='25k'
        description='Deliciosa torta de chocolate de 10 porciones'
      /> 
    </div>
  );
}

export default App;
