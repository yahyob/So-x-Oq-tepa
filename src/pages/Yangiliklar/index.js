import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { useT } from '../../custom/hooks/useT';

const Sidebar = () => {

  const { t, lang } = useT();

  return (
    <div>
      <div className='container-fluid d-flex w-100 p-0'>
      <div id='zindex' style={{ display: 'flex', overflow: 'scroll initial', zIndex: "21" }}>
        <CDBSidebar textColor="#fff" backgroundColor="#1976D2">
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a className="text-decoration-none" style={{ color: 'inherit' }}>
              {t(`Yangiliklar.${lang}`)}
            </a>
          </CDBSidebarHeader>
          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <Link to="/News">
                <CDBSidebarMenuItem icon="columns">{t(`Yangiliklar.${lang}`)}</CDBSidebarMenuItem>
              </Link>
              <NavLink to="/News/AxborotXizmati">
                <CDBSidebarMenuItem icon="user">{t(`AXizmati.${lang}`)}</CDBSidebarMenuItem>
              </NavLink>
              <NavLink to="/News/Elonlar">
                <CDBSidebarMenuItem icon="table">{t(`Elonlar.${lang}`)}</CDBSidebarMenuItem>
              </NavLink>
              {/* <NavLink to="/News/PresRelizlar">
                <CDBSidebarMenuItem icon="chart-line">{t(`pres.${lang}`)}</CDBSidebarMenuItem>
              </NavLink> */}
              {/* <NavLink to="/News/OAVVakillar">
                <CDBSidebarMenuItem icon="table">OAV Vakillar</CDBSidebarMenuItem>
              </NavLink> */}

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
