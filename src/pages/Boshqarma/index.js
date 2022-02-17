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

const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: '130vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#1976D2">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a className="text-decoration-none" style={{ color: 'inherit' }}>
            Boshqarma
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <Link exact to="/boshqarma">
              <CDBSidebarMenuItem icon="columns">Boshqarma haqida</CDBSidebarMenuItem>
            </Link>
            <NavLink exact to="/boshqarma/raxbariyat">
              <CDBSidebarMenuItem icon="user">Rahbariyat</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/boshqarma/boshqarmaNizomi">
              <CDBSidebarMenuItem icon="table">Boshqarma nizomi</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/boshqarma/boshqarmaTuzilmasi">
              <CDBSidebarMenuItem icon="chart-line">Boshqarma tuzilmasi</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/boshqarma/hayat">
              <CDBSidebarMenuItem icon="table">Hayat</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/boshqarma/suvBolimlari">
              <CDBSidebarMenuItem icon="table">Suv bo’limlari</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/boshqarma/markaziyAparat">
              <CDBSidebarMenuItem icon="table">Markaziy aparat</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/boshqarma/byudjetQonun">
              <CDBSidebarMenuItem icon="table">Byujet to’grisidagi qonunchilik</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/boshqarma/ochiqMalumotlar">
              <CDBSidebarMenuItem icon="table">Ochiq ma’lumot</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/boshqarma/elektronHukumat">
              <CDBSidebarMenuItem icon="table">Elektron hukumat</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/boshqarma/boshIsh">
              <CDBSidebarMenuItem icon="table">Bo’sh ish o’rinlari</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/boshqarma/tenderlarTanlov">
              <CDBSidebarMenuItem icon="table">Tenderlar va tanlovlar</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/boshqarma/tadbirlar">
              <CDBSidebarMenuItem icon="table">Tadbirlar</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
