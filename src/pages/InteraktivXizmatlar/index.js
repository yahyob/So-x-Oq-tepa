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
    <div className='d-flex w-100'>
      <div id='zindex' style={{ display: 'flex', overflow: 'scroll initial', zIndex: "21" }}>
        <CDBSidebar textColor="#fff" backgroundColor="#1976D2">
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a className="text-decoration-none" style={{ color: 'inherit' }}>
              Interaktive
            </a>
          </CDBSidebarHeader>
          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <Link to="/Interaktive">
                <CDBSidebarMenuItem icon="columns">Jismoniy Va Yuridik Shaxslar Murojati</CDBSidebarMenuItem>
              </Link>
              <NavLink to="/Interaktive/MurojatYollash">
                <CDBSidebarMenuItem icon="user">Murojat Yo'llash</CDBSidebarMenuItem>
              </NavLink>
              <NavLink to="/Interaktive/TarjimaiHol">
                <CDBSidebarMenuItem icon="table">TarjimaiHol</CDBSidebarMenuItem>
              </NavLink>
              <NavLink to="/Interaktive/IshTartibi">
                <CDBSidebarMenuItem icon="chart-line">IshTartibi</CDBSidebarMenuItem>
              </NavLink>

            </CDBSidebarMenu>
          </CDBSidebarContent>
        </CDBSidebar>
      </div>
      <div className='container w-100'>
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
