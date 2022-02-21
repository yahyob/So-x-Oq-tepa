import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Banner from './pages/Banner';
import NavbarMain from './pages/Navbar';
import Home from './pages/Home';

import Boshqarma from './pages/Boshqarma'
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

import News from './pages/Yangiliklar'
import Yangiliklar from './pages/Yangiliklar/Yangiliklar';
import AxborotXizmati from './pages/Yangiliklar/AxborotXizmati';
import Elonlar from './pages/Yangiliklar/Elonlar';
import PresRelizlar from './pages/Yangiliklar/PresRelizlar';
import OAVVakillar from './pages/Yangiliklar/OAV';

import Fotogalereya from './pages/Mediagalereya/Fotogalereya';
import VideoMaterial from './pages/Mediagalereya/VideoMaterial';

import Datas from './pages/Malumotlar'
import SuvXojaligiFidoiylari from './pages/Malumotlar/SuvXojaligiFidoiylari';
import KorrupsiyagaQarshiKurash from './pages/Malumotlar/KorrupsiyagaQarshiKurash';
import RahbariyatMaruzalari from './pages/Malumotlar/RahbariyatMaruzalari';
import Statistika from './pages/Malumotlar/Statistika';
import SuvXojalikFaoliyatiTogrisida from './pages/Malumotlar/SuvXo’jalikFaoliyatiTo’g’risida';
import AxborotdanFoydalanuvchilarningSorovnomasi from './pages/Malumotlar/AxborotdanFoydalanuvchilarningSo’rovnomasi';
import RasmiyWebSahifa from './pages/Malumotlar/RasmiyWebSahifa';

import Hujjatlar from './pages/Hujjatlar';
import Qonunlar from './pages/Hujjatlar/Qonunlar';
import Qarorlar from './pages/Hujjatlar/Qarorlar';
import Farmonlar from './pages/Hujjatlar/Farmonlar';
import NormativHujjatlar from './pages/Hujjatlar/NormativHujjatlar';
import Dasturlar from './pages/Hujjatlar/Dasturlar';
import Loyihalar from './pages/Hujjatlar/Loyihalar';

import Interaktive from './pages/InteraktivXizmatlar'
import JismoniyVaYuridikShaxslarMurojati from './pages/InteraktivXizmatlar/JismoniyVaYuridikShaxslarMurojati';
import MurojatYollash from './pages/InteraktivXizmatlar/MurojatYollash';
import TarjimaiHol from './pages/InteraktivXizmatlar/TarjimaiHol';
import IshTartibi from './pages/InteraktivXizmatlar/IshTartibi';

import FoydaliMaslahatlar from './pages/FoydaliMaslahatlar/index';
import Boglanish from './pages/Boglanish/index';
import { fallbackLng, languages } from './constants';
import i18next from 'i18next';
import Section4Home from './pages/Footer';
import Tenddetails from './pages/Boshqarma/TenderlarTanlovlar/tendDetails';

function App() {


  useEffect(() => {
    let currentLang = localStorage.getItem("langu");

    if (!currentLang) {
      localStorage.setItem("langu", fallbackLng);
    } else if (languages.includes(currentLang)) {
      i18next.changeLanguage(currentLang);
    };

    // console.log = () => null
  }, [i18next]);

  return (
    <div className="App">
      <Banner />
      <BrowserRouter>
        <NavbarMain />
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='boshqarma' element={<Boshqarma />}>
            <Route index element={<BoshqarmaHaqida />} />
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
            <Route path="tenderlarTanlov/:id" element={<Tenddetails />} />
            <Route path='tadbirlar' element={<Tadbirlar />} />
          </Route>

          <Route path='News' element={<News />}>
            <Route index element={<Yangiliklar />} />
            <Route path='AxborotXizmati' element={<AxborotXizmati />} />
            <Route path='Elonlar' element={<Elonlar />} />
            <Route path='PresRelizlar' element={<PresRelizlar />} />
            <Route path='OAVVakillar' element={<OAVVakillar />} />
          </Route>

          <Route path='Fotogalereya' element={<Fotogalereya />} />
          <Route path='VideoMaterial' element={<VideoMaterial />} />

          <Route path='datas' element={<Datas />}>
            <Route index element={<SuvXojaligiFidoiylari />} />
            <Route path='KorrupsiyagaQarshiKurash' element={<KorrupsiyagaQarshiKurash />} />
            <Route path='RahbariyatMaruzalari' element={<RahbariyatMaruzalari />} />
            <Route path='Statistika' element={<Statistika />} />
            <Route path='SuvXojalikFaoliyatiTogrisida' element={<SuvXojalikFaoliyatiTogrisida />} />
            <Route path='RasmiyWebSahifa' element={<RasmiyWebSahifa />} />
            <Route path='AxborotdanFoydalanuvchilarningSorovnomasi' element={<AxborotdanFoydalanuvchilarningSorovnomasi />} />
          </Route>

          <Route path='Hujjatlar' element={<Hujjatlar />}>
            <Route index element={<Qonunlar />} />
            <Route path='Qarorlar' element={<Qarorlar />} />
            <Route path='Farmonlar' element={<Farmonlar />} />
            <Route path='NormativHujjatlar' element={<NormativHujjatlar />} />
            <Route path='Dasturlar' element={<Dasturlar />} />
            <Route path='Loyihalar' element={<Loyihalar />} />
          </Route>

          <Route path='Interaktive' element={<Interaktive />}>
            <Route index element={<JismoniyVaYuridikShaxslarMurojati />} />
            <Route path='MurojatYollash' element={<MurojatYollash />} />
            <Route path='TarjimaiHol' element={<TarjimaiHol />} />
            <Route path='IshTartibi' element={<IshTartibi />} />
          </Route>

          <Route path='FoydaliMaslahatlar' element={<FoydaliMaslahatlar />} />
          <Route path='Boglanish' element={<Boglanish />} />
        </Routes>
        <Section4Home />
      </BrowserRouter>
    </div>
  );
}

export default App;
