import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./providers/CartContext";
import { Nav } from "./components/Nav/Nav";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartView } from "./components/Cart/CartView";
import { ProductFormContainer } from "./components/adminComponents/ProductForm/ProductFormContainer";
import { ProductSuccess } from "./components/adminComponents/ProductForm/ProductSuccess";
import { Footer } from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="/admin" element={<ProductFormContainer />} />
          <Route path="/admin/products/success/:id" element={<ProductSuccess />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
