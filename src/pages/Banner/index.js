import React from 'react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';


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
        <div className="container" style={{display: 'flex', justifyContent: "space-between"}}>
            <h1>Banner</h1>
            <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    {t('changelang')}
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    {
                        language.map(({ code, country_code, name }) => (
                            <li
                                onClick={() => i18next.changeLanguage(code)}
                                key={country_code}>
                                <a className="dropdown-item" href="#">{name}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default Banner;
