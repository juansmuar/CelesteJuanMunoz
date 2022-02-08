import './App.css';

import NavBar from "./components/Header/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailsContainer from "./components/ItemDetails/ItemDetailsContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemDetailsContainer />
    </div>
  );
}

export default App;
