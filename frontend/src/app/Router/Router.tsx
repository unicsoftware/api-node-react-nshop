import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Examples, Home, Products } from '@/pages';
import ScriptLoja from '@/pages/Scripts/ScriptLoja';

const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/scriptloja" element={<ScriptLoja />} />
    <Route path="/products" element={<Products />} />
    <Route path="/examples" element={<Examples />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default Router;
