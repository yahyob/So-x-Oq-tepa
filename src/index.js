import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import i18n from 'i18next';
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';


i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'ru', 'uz'],
    // lng: "uz",
    // fallbackLng: "uz",
    detection: {
      order: ['htmlTag', 'cookie', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie']
    },
    backend: {
      loadPath: "/assets/locales/languages/translation.json"
    },
    // react: { useSuspense: false }
  });


const loading = (
  <div style={{ position: 'fixed', backgroundColor: '#fff', display: 'flex', width: '100%', height: '100%', justifyContent: "center", alignItems: "center" }}>
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
)

ReactDOM.render(
  <Suspense fallback={loading}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);