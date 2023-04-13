import "./index.css";
import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Error from "./pages/Error";
import SharedLayout from './pages/SharedLayout';
import SingleProducts from "./pages/SingleProducts";
import Dashboard from  './pages/Dashboard';
import Login from './pages/Login'


function App() {
  const [user, setUser] = useState(null)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:productId" element={<SingleProducts />} />
            <Route  path='login' element={<Login setUser={setUser} />} />
            <Route path='dashboard' element={<Dashboard user={user}/>} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
