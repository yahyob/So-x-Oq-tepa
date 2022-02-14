import React from 'react'
import { useTranslation } from 'react-i18next';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Banner from './pages/Banner';
import NavbarMain from './pages/Navbar';
import Home from './pages/Home';
import BoshqarmaHaqida from './pages/Boshqarma/BoshqarmaHaqida';
import Rahbariyat from './pages/Boshqarma/Rahbariyat';
import BoshqarmaNizomi from './pages/Boshqarma/BoshqarmaNizomi';
import BoshqarmaTuzilmasi from './pages/Boshqarma/BoshqarmaTuzilmasi';
import SuvBolimlari from './pages/Boshqarma/SuvBolimlari';
import MarkaziyApparat from './pages/Boshqarma/MarkaziyApparat';
import ByudjetQonun from './pages/Boshqarma/ByudjetQonun';
import OchiqMalumot from './pages/Boshqarma/OchiqMalumot';
import ElektronJamiyat from './pages/Boshqarma/ElektronJamiyat';
import BoshIshOrnlari from './pages/Boshqarma/BoshIshOrnlari';
import TenderlarTanlovlar from './pages/Boshqarma/TenderlarTanlovlar';
import Tadbirlar from './pages/Boshqarma/Tadbirlar';
import Hayat from './pages/Boshqarma/Hayat';

import Yangiliklar from './pages/Yangiliklar/Yangiliklar';
import AxborotXizmati from './pages/Yangiliklar/AxborotXizmati';
import Elonlar from './pages/Yangiliklar/Elonlar';
import PresRelizlar from './pages/Yangiliklar/PresRelizlar';
import OAVVakillar from './pages/Yangiliklar/OAV';

import Fotogalereya from './pages/Mediagalereya/Fotogalereya';
import VideoMaterial from './pages/Mediagalereya/VideoMaterial';

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
          <Route path='raxbariyat' element={<Rahbariyat />} />
          <Route path='boshqarmaNizomi' element={<BoshqarmaNizomi />} />
          <Route path='boshqarmaTuzilmasi' element={<BoshqarmaTuzilmasi />} />
          <Route path='hayat' element={<Hayat />} />
          <Route path='suvBolimlari' element={<SuvBolimlari />} />
          <Route path='markaziyAparat' element={<MarkaziyApparat />} />
          <Route path='byudjetQonun' element={<ByudjetQonun />} />
          <Route path='ochiqMalumotlar' element={<OchiqMalumot />} />
          <Route path='elektronHukumat' element={<ElektronJamiyat />} />
          <Route path='boshIsh' element={<BoshIshOrnlari />} />
          <Route path='tenderlarTanlov' element={<TenderlarTanlovlar />} />
          <Route path='tadbirlar' element={<Tadbirlar />} />

          <Route path='Yangiliklar' element={<Yangiliklar />} />
          <Route path='AxborotXizmati' element={<AxborotXizmati />} />
          <Route path='Elonlar' element={<Elonlar />} />
          <Route path='PresRelizlar' element={<PresRelizlar />} />
          <Route path='OAVVakillar' element={<OAVVakillar />} />

          <Route path='Fotogalereya' element={<Fotogalereya />} />
          <Route path='VideoMaterial' element={<VideoMaterial />} />
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
