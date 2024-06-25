import DataContextProvider from "./context/DataContext";
import Category from "./components/Category";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <DataContextProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Category />
          <Pages />
        </div>
      </BrowserRouter>
    </DataContextProvider>
  );
}

export default App;
