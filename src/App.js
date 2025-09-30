import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';
import CategoryPage from './pages/CategoryPage';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="category/:categoryId" element={<CategoryPage />} />
        <Route path="products/:productId" element={<ProductPage />} />
        <Route path="*" element={<div className="pt-[120px] sm:pt-[130px] md:pt-[140px] lg:pt-[140px] pb-20 text-center">Page not found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
