import {Routes, Route } from "react-router-dom";
import {Home, Store, Cart, Library, Profile, Login, Register, Product, ErrorPage, OrderSummary, About, Contact } from "../pages";
import { ProtectedRoute } from "./ProtectedRoute";

export const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="store" element={<Store />} />
            <Route path="product/:id" element={<Product />} />

            <Route path="cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
            <Route path="library" element={<ProtectedRoute><Library /></ProtectedRoute>} />
            <Route path="profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="order_summary" element={<ProtectedRoute><OrderSummary /></ProtectedRoute>} />

            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />

            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    </>
  )
}