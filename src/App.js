import React from 'react'
import { useTranslation } from 'react-i18next';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Banner from './pages/Banner';
import NavbarMain from './pages/Navbar';
import BoshqarmaHaqida from './pages/Boshqarma/BoshqarmaHaqida';
import Home from './pages/Home';


function App() {

  const { t } = useTranslation();

  return (
    <div className="App">
      <Banner />
      <h1 className='text-center mt-5 pt-5 fw-bold'>{t('title')}</h1>
      <BrowserRouter>
      <NavbarMain />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='boshqarmaHaqida' element={<BoshqarmaHaqida />} />
          <Route path='boshqarmaHaqida' element={<BoshqarmaHaqida />} />
          <Route path='boshqarmaHaqida' element={<BoshqarmaHaqida />} />
          <Route path='boshqarmaHaqida' element={<BoshqarmaHaqida />} />
          <Route path='boshqarmaHaqida' element={<BoshqarmaHaqida />} />
          <Route path='boshqarmaHaqida' element={<BoshqarmaHaqida />} />
          <Route path='boshqarmaHaqida' element={<BoshqarmaHaqida />} />
          <Route path='boshqarmaHaqida' element={<BoshqarmaHaqida />} />
          <Route path='boshqarmaHaqida' element={<BoshqarmaHaqida />} />
          <Route path='boshqarmaHaqida' element={<BoshqarmaHaqida />} />
          <Route path='boshqarmaHaqida' element={<BoshqarmaHaqida />} />
          <Route path='boshqarmaHaqida' element={<BoshqarmaHaqida />} />
          <Route path='boshqarmaHaqida' element={<BoshqarmaHaqida />} />
          <Route path='boshqarmaHaqida' element={<BoshqarmaHaqida />} />
          <Route path='boshqarmaHaqida' element={<BoshqarmaHaqida />} />
          <Route path='boshqarmaHaqida' element={<BoshqarmaHaqida />} />
          <Route path='boshqarmaHaqida' element={<BoshqarmaHaqida />} />
          <Route path='boshqarmaHaqida' element={<BoshqarmaHaqida />} />
          <Route path='boshqarmaHaqida' element={<BoshqarmaHaqida />} />
          <Route path='boshqarmaHaqida' element={<BoshqarmaHaqida />} />
          <Route path='boshqarmaHaqida' element={<BoshqarmaHaqida />} />
          <Route path='boshqarmaHaqida' element={<BoshqarmaHaqida />} />
          <Route path='boshqarmaHaqida' element={<BoshqarmaHaqida />} />
          <Route path='boshqarmaHaqida' element={<BoshqarmaHaqida />} />
          <Route path='boshqarmaHaqida' element={<BoshqarmaHaqida />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
