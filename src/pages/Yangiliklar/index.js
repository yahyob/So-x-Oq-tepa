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
          Yangiliklar
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <Link exact to="/Yangiliklar">
              <CDBSidebarMenuItem icon="columns">Yangiliklar</CDBSidebarMenuItem>
            </Link>
            <NavLink exact to="/News/AxborotXizmati">
              <CDBSidebarMenuItem icon="user">Axborot Xizmati</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/News/Elonlar">
              <CDBSidebarMenuItem icon="table">E'lonlar</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/News/PresRelizlar">
              <CDBSidebarMenuItem icon="chart-line">Pres Relizlar</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/News/OAVVakillar">
              <CDBSidebarMenuItem icon="table">OAV Vakillar</CDBSidebarMenuItem>
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
