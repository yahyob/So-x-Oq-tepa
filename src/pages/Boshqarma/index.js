import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { useT } from '../../custom/hooks/useT';

import 'bootstrap/dist/css/bootstrap.min.css'

const Sidebar = () => {

  const { t, lang } = useT();

  return (
    <div>
      <div className='container-fluid d-flex w-100 p-0'>
      <div style={{ display: 'flex', overflow: 'scroll initial', zIndex: "21" }}>
        <CDBSidebar textColor="#fff" backgroundColor="#1976D2">
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a className="text-decoration-none" style={{ color: 'inherit' }}>
              {t(`Boshqarma.${lang}`)}
            </a>
          </CDBSidebarHeader>
          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <Link to="/boshqarma">
                <CDBSidebarMenuItem icon="columns">{t(`bHaqidaTitle1.${lang}`)}</CDBSidebarMenuItem>
              </Link>
              <NavLink to="/boshqarma/raxbariyat">
                <CDBSidebarMenuItem icon="user">{t(`rahbariyat.${lang}`)}</CDBSidebarMenuItem>
              </NavLink>
              <NavLink to="/boshqarma/boshqarmaNizomi">
                <CDBSidebarMenuItem icon="table">{t(`bNizomTitle1.${lang}`)}</CDBSidebarMenuItem>
              </NavLink>
              <NavLink to="/boshqarma/boshqarmaTuzilmasi">
                <CDBSidebarMenuItem icon="chart-line">{t(`bTuzilmaTitle1.${lang}`)}</CDBSidebarMenuItem>
              </NavLink>
              <NavLink to="/boshqarma/hayat">
                <CDBSidebarMenuItem icon="table">{t(`Hayat.${lang}`)}</CDBSidebarMenuItem>
              </NavLink>
              <NavLink to="/boshqarma/suvBolimlari">
                <CDBSidebarMenuItem icon="table">{t(`SuvBolimlari.${lang}`)}</CDBSidebarMenuItem>
              </NavLink>
              <NavLink to="/boshqarma/markaziyAparat">
                <CDBSidebarMenuItem icon="table">{t(`Mapparat.${lang}`)}</CDBSidebarMenuItem>
              </NavLink>
              <NavLink to="/boshqarma/byudjetQonun">
                <CDBSidebarMenuItem icon="table">{t(`Byudjetto’g’risidagiqonunchilik.${lang}`)}</CDBSidebarMenuItem>
              </NavLink>
              <NavLink to="/boshqarma/ochiqMalumotlar">
                <CDBSidebarMenuItem icon="table">{t(`Ochiqma'lumotlar.${lang}`)}</CDBSidebarMenuItem>
              </NavLink>
              <NavLink to="/boshqarma/elektronHukumat">
                <CDBSidebarMenuItem icon="table">{t(`Elektronhukumat.${lang}`)}</CDBSidebarMenuItem>
              </NavLink>
              <NavLink to="/boshqarma/boshIsh">
                <CDBSidebarMenuItem icon="table">{t(`ishOrni.${lang}`)}</CDBSidebarMenuItem>
              </NavLink>
              <NavLink to="/boshqarma/tenderlarTanlov">
                <CDBSidebarMenuItem icon="table">{t(`tendrTanlov.${lang}`)}</CDBSidebarMenuItem>
              </NavLink>
              <NavLink to="/boshqarma/tadbirlar">
                <CDBSidebarMenuItem icon="table">{t(`tadbir.${lang}`)}</CDBSidebarMenuItem>
              </NavLink>
            </CDBSidebarMenu>
          </CDBSidebarContent>
        </CDBSidebar>
      </div>
      <div className='w-100'>
        <Outlet />
      </div>
      </div>
    </div>
  );
};

export default Sidebar;
