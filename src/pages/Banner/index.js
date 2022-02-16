import React from 'react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import './style.css';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';


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

const Banner = () => {

  const { t } = useTranslation()

  return (
    <section className='banner-section'>
      <div className="container-fluid d-flex justify-content-between align-items-center">

        <div className='logo d-flex align-items-center'>
          <img src='./logo.png' alt='logo' />
          <font className='logo-title w-50'>SO’X-OQTEPA IRRIGATSIYA TIZIMI BOSHQARMASI</font>
        </div>

        <div className='phone d-flex align-items-center d-none d-lg-flex'>
          <PhoneIcon className='icon' sx={{ fontSize: 33 }} />
          <div className="m-2">
            <span>A'loqa markazi</span>
            <h6>+998 90 000 00 00</h6>
          </div>
        </div>

        <div className='address d-flex align-items-center d-none d-lg-flex'>
          <HomeIcon className='icon' sx={{ fontSize: 33 }} />
          <div className="m-2">
            <span>Manzil</span>
            <h6 className='' style={{ fontSize: "14px", maxWidth: "150px" }}>Farg'ona viloyati Qo'qon shaxri 35-uy</h6>
          </div>
        </div>

        <div className="dropdown language">
          <button className="btn btn-outline-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            {t('changelang')}
          </button>
          <ul id='langu' className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {
              language.map(({ code, country_code, name }) => (
                <li
                  onClick={() => i18next.changeLanguage(code)}
                  key={country_code}>
                  <a className="dropdown-item" href="#">{country_code}</a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Banner;
