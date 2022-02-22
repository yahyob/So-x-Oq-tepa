import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='d-flex w-100'>
      <div id='zindex' style={{ display: 'flex', height: '75vh', overflow: 'scroll initial', zIndex: "21" }}>
        <CDBSidebar textColor="#fff" backgroundColor="#1976D2">
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a className="text-decoration-none" style={{ color: 'inherit' }}>
              Yangiliklar
            </a>
          </CDBSidebarHeader>
          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <Link to="/News">
                <CDBSidebarMenuItem icon="columns">Yangiliklar</CDBSidebarMenuItem>
              </Link>
              <NavLink to="/News/AxborotXizmati">
                <CDBSidebarMenuItem icon="user">Axborot Xizmati</CDBSidebarMenuItem>
              </NavLink>
              <NavLink to="/News/Elonlar">
                <CDBSidebarMenuItem icon="table">E'lonlar</CDBSidebarMenuItem>
              </NavLink>
              <NavLink to="/News/PresRelizlar">
                <CDBSidebarMenuItem icon="chart-line">Pres Relizlar</CDBSidebarMenuItem>
              </NavLink>
              <NavLink to="/News/OAVVakillar">
                <CDBSidebarMenuItem icon="table">OAV Vakillar</CDBSidebarMenuItem>
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
