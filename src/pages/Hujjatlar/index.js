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
import '../Boshqarma/style.css';

const Sidebar = () => {
  const { t, lang } = useT();
  return (
    <div >
      <div className='container-fluid d-flex w-100 p-0'>
        <div id='zindex' style={{ display: 'flex', overflow: 'scroll initial', zIndex: "21", borderRight: "1px solid rgb(197, 191, 191) " }}>
          <CDBSidebar textColor="#000000" backgroundColor="#fff">
            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
              <a className="text-decoration-none" style={{ color: 'inherit' }}>
                {t(`Hujjatlar.${lang}`)}
              </a>
            </CDBSidebarHeader>
            <CDBSidebarContent className="sidebar-content">
              <CDBSidebarMenu>
                <Link to="/Hujjatlar">
                  <CDBSidebarMenuItem icon="columns">{t(`laws.${lang}`)}</CDBSidebarMenuItem>
                </Link>
                <NavLink to="/Hujjatlar/Qarorlar">
                  <CDBSidebarMenuItem icon="user">{t(`Decisions.${lang}`)}</CDBSidebarMenuItem>
                </NavLink>
                <NavLink to="/Hujjatlar/Farmonlar">
                  <CDBSidebarMenuItem icon="table">{t(`farmon.${lang}`)}</CDBSidebarMenuItem>
                </NavLink>
                <NavLink to="/Hujjatlar/NormativHujjatlar">
                  <CDBSidebarMenuItem icon="chart-line">{t(`normative.${lang}`)}</CDBSidebarMenuItem>
                </NavLink>
                <NavLink to="/Hujjatlar/Dasturlar">
                  <CDBSidebarMenuItem icon="table">{t(`dastur.${lang}`)}</CDBSidebarMenuItem>
                </NavLink>
                <NavLink to="/Hujjatlar/Loyihalar">
                  <CDBSidebarMenuItem icon="table">{t(`Loyihalar.${lang}`)}</CDBSidebarMenuItem>
                </NavLink>
              </CDBSidebarMenu>
            </CDBSidebarContent>
          </CDBSidebar>
        </div>
          <div>
            <Outlet />
          </div>
      </div>
    </div>
  );
};

export default Sidebar;
