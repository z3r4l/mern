import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Login, MainApp, Register } from '../../pages';
import CreateBlog from '../../pages/CreateBlog';
import DetailBlog from '../../pages/DetailBlog';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainApp />}>
          <Route path="/" element={<Home />} />
          <Route path="create-blog" element={<CreateBlog />} />
          <Route path="detail-blog" element={<DetailBlog />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
