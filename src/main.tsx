import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './index.css'
import AccesPage from './pages/access/index.tsx';
import MainPage from './pages/main/index.tsx';
import SharePage from './pages/share/index.tsx';
import FilesPage from './pages/files/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/access" element={<AccesPage/>} />
        <Route path="/share" element={<SharePage/>} />
        <Route path="/files" element={<FilesPage/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
