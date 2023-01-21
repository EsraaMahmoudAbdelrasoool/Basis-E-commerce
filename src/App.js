import Navbar from "./components/Navbar";
import ProductsList from "./components/ProductsList";
import Sld from "./components/Sld";
import { Routes, Route } from "react-router-dom";
import Aboat from "./components/Aboat";
import ProductDetails from "./components/ProductDetails";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Sld />
              <ProductsList />
            </>
          }
        />
        <Route path="about" element={<Aboat />} />

        <Route path="product/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
