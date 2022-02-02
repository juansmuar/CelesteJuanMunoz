import "./components/NavBar.css"
import './App.css';

import NavBar from "./components/NavBar";
import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer 
        name='Torta de Chocolate'
        price='25k'
        description='Deliciosa torta de chocolate de 10 porciones'
        img='ChocoCake'
      /> 
      <ItemCount 
        stock={20}
        intial={1}
      />
    </div>
  );
}

export default App;
