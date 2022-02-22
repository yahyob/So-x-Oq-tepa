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

import 'bootstrap/dist/css/bootstrap.min.css'

const Sidebar = () => {
  return (
    <div className='d-flex w-100'>
      <div style={{ display: 'flex', overflow: 'scroll initial', zIndex: "21" }}>
        <CDBSidebar textColor="#fff" backgroundColor="#1976D2">
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a className="text-decoration-none" style={{ color: 'inherit' }}>
              Boshqarma
            </a>
          </CDBSidebarHeader>
          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <Link to="/boshqarma">
                <CDBSidebarMenuItem icon="columns">Boshqarma haqida</CDBSidebarMenuItem>
              </Link>
              <NavLink to="/boshqarma/raxbariyat">
                <CDBSidebarMenuItem icon="user">Rahbariyat</CDBSidebarMenuItem>
              </NavLink>
              <NavLink to="/boshqarma/boshqarmaNizomi">
                <CDBSidebarMenuItem icon="table">Boshqarma nizomi</CDBSidebarMenuItem>
              </NavLink>
              <NavLink to="/boshqarma/boshqarmaTuzilmasi">
                <CDBSidebarMenuItem icon="chart-line">Boshqarma tuzilmasi</CDBSidebarMenuItem>
              </NavLink>
              <NavLink to="/boshqarma/hayat">
                <CDBSidebarMenuItem icon="table">Hayat</CDBSidebarMenuItem>
              </NavLink>
              <NavLink to="/boshqarma/suvBolimlari">
                <CDBSidebarMenuItem icon="table">Suv bo’limlari</CDBSidebarMenuItem>
              </NavLink>
              <NavLink to="/boshqarma/markaziyAparat">
                <CDBSidebarMenuItem icon="table">Markaziy aparat</CDBSidebarMenuItem>
              </NavLink>
              <NavLink to="/boshqarma/byudjetQonun">
                <CDBSidebarMenuItem icon="table">Byujet to’grisidagi qonunchilik</CDBSidebarMenuItem>
              </NavLink>
              <NavLink to="/boshqarma/ochiqMalumotlar">
                <CDBSidebarMenuItem icon="table">Ochiq ma’lumot</CDBSidebarMenuItem>
              </NavLink>
              <NavLink to="/boshqarma/elektronHukumat">
                <CDBSidebarMenuItem icon="table">Elektron hukumat</CDBSidebarMenuItem>
              </NavLink>
              <NavLink to="/boshqarma/boshIsh">
                <CDBSidebarMenuItem icon="table">Bo’sh ish o’rinlari</CDBSidebarMenuItem>
              </NavLink>
              <NavLink to="/boshqarma/tenderlarTanlov">
                <CDBSidebarMenuItem icon="table">Tenderlar va tanlovlar</CDBSidebarMenuItem>
              </NavLink>
              <NavLink to="/boshqarma/tadbirlar">
                <CDBSidebarMenuItem icon="table">Tadbirlar</CDBSidebarMenuItem>
              </NavLink>
            </CDBSidebarMenu>
          </CDBSidebarContent>
        </CDBSidebar>
      </div>
      <div className='w-100'>
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
