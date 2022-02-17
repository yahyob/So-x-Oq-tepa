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
    <div style={{ display: 'flex', height: '75vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#1976D2">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a className="text-decoration-none" style={{ color: 'inherit' }}>
          Interaktive
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <Link exact to="/Interaktive">
              <CDBSidebarMenuItem icon="columns">Jismoniy Va Yuridik Shaxslar Murojati</CDBSidebarMenuItem>
            </Link>
            <NavLink exact to="/Interaktive/MurojatYollash">
              <CDBSidebarMenuItem icon="user">Murojat Yo'llash</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Interaktive/TarjimaiHol">
              <CDBSidebarMenuItem icon="table">TarjimaiHol</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Interaktive/IshTartibi">
              <CDBSidebarMenuItem icon="chart-line">IshTartibi</CDBSidebarMenuItem>
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
