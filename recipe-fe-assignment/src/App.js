import DataContextProvider from "./context/DataContext";
import Home from "./pages/Home";

function App() {
  return (
    <DataContextProvider>
      <div className="App">
        <h1>Recipe app</h1>
        <Home />
      </div>
    </DataContextProvider>
  );
}

export default App;
