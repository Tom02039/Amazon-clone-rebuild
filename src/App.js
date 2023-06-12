import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  NavBar,
  HomePage,
  SearchResultsPage,
  CheckoutPage,
  ProductPage,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/search" element={<SearchResultsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
