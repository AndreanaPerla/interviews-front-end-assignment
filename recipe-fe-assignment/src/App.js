import DataContextProvider from "./context/DataContext";
import Category from "./components/Category";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <DataContextProvider>
      <BrowserRouter>
        <div className="App">
          <h1>Recipe app</h1>
          <Category />
          <Pages />
        </div>
      </BrowserRouter>
    </DataContextProvider>
  );
}

export default App;
