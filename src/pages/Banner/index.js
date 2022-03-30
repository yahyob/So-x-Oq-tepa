import React from 'react';
import './style.css';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import { changeLang, setLang, getLang } from '../../helpers';
import { useT } from '../../custom/hooks/useT';


const language = [
  {
    code: "en",
    name: "English",
    country_code: "en"
  },
  {
    code: "ru",
    name: "Pусский",
    country_code: "ru"
  },
  {
    code: "uz",
    name: "Uzbek",
    country_code: "uz"
  },
]

const handleChangeLng = (code) => {
  changeLang(code)
  setLang(code)
  window.location.reload();
}

const Banner = () => {

  const { t, lang } = useT()

  return (
    <section className='banner-section'>
      <div className="container-fluid d-flex justify-content-between align-items-center">

        <div className='flag d-flex align-items-center'>
          <img src='/img/flag.jpg' alt='flag' />
          <font className='logo-title '>O’zbekiston Respublikasi Suv xo’jaligi Vazirligi Sirdaryo-So’x irrigatsiya tizimlari xavza boshqarmasi xuzuridagi So’x-Oqtepa irrigatsiya tizimi boshqarmasi</font>
        </div>

        <div className='ummmm d-flex align-items-center'>
          <div className='logo d-flex align-items-center'>
            <img src='/logo.png' alt='logo' />
            {/* <font className='logo-title w-50'>{t(`tName.${lang}`)}</font> */}
          </div>
          <div className='d-flex flex-column mx-3'>
            <div className='phone d-flex align-items-center d-none d-lg-flex'>
              <PhoneIcon className='icon' sx={{ fontSize: 33 }} />
              <div className="m-2">
                <span>{t(`contactCenter.${lang}`)}</span>
                <h6><a className='text-decoration-none' href="tel: +998 90 000 00 00">+998 90 000 00 00</a></h6>
              </div>
            </div>
            <div className='address d-flex align-items-center d-none d-lg-flex'>
              <HomeIcon className='icon' sx={{ fontSize: 33 }} />
              <div className="m-2">
                <span>{t(`address.${lang}`)}</span>
                <h6 style={{ fontSize: "14px", maxWidth: "150px" }}>{t(`tAddress.${lang}`)}</h6>
              </div>
            </div>
          </div>
        <div className="dropdown language" style={{ zIndex: "999898989898898" }}>
          <button className="btn btn-outline-primary dropdown-toggle text-uppercase" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            {getLang()}
          </button>
          <ul id='langu' className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {
              language.map(({ code, country_code }) => (
                <li
                  onClick={() => handleChangeLng(code)}
                  key={country_code}>
                  <a className="dropdown-item" href="#">{country_code}</a>
                </li>
              ))
            }
          </ul>
        </div>
        </div>

      </div>
    </section>
  );
}

export default Banner;
