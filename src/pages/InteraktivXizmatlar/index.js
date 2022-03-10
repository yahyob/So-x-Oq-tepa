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
import '../Boshqarma/style.css'
// import { Link } from "react-scroll";

const Sidebar = () => {

  const { t, lang } = useT();

  return (
    <div className=' w-100'>
      <div className='container-fluid d-flex p-0'>
        <div id='zindex' style={{ display: 'flex', overflow: 'scroll initial', zIndex: "21", borderRight: "1px solid rgb(197, 191, 191) " }}>
          <CDBSidebar textColor="#000000" backgroundColor="#fff">
            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
              <a className="text-decoration-none" style={{ color: 'inherit' }}>
                {t(`Interaktiv.${lang}`)}
              </a>
            </CDBSidebarHeader>
            <CDBSidebarContent className="sidebar-content">
              <CDBSidebarMenu>
                <Link to="/Interaktive">
                  <CDBSidebarMenuItem icon="columns">{t(`Jismoniy.${lang}`)}</CDBSidebarMenuItem>
                </Link>
                <NavLink to="/Interaktive/MurojatYollash">
                  <CDBSidebarMenuItem icon="user">{t(`murojat.${lang}`)}</CDBSidebarMenuItem>
                </NavLink>
                <NavLink to="/Interaktive/TarjimaiHol">
                  <CDBSidebarMenuItem icon="table">{t(`tarjimaiy.${lang}`)}</CDBSidebarMenuItem>
                </NavLink>
                <NavLink to="/Interaktive/IshTartibi" spy={true} smooth={true} offset={50} duration={500}>
                  <CDBSidebarMenuItem icon="chart-line">{t(`ishTartib.${lang}`)}</CDBSidebarMenuItem>
                </NavLink>

              </CDBSidebarMenu>
            </CDBSidebarContent>
          </CDBSidebar>
        </div>
        <div className='container w-100'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
