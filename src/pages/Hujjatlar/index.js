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
    <div style={{ display: 'flex', height: '73vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#1976D2">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a className="text-decoration-none" style={{ color: 'inherit' }}>
          Hujjatlar
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <Link exact to="/Hujjatlar">
              <CDBSidebarMenuItem icon="columns">Qonunlar</CDBSidebarMenuItem>
            </Link>
            <NavLink exact to="/Hujjatlar/Qarorlar">
              <CDBSidebarMenuItem icon="user">Qarorlar</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Hujjatlar/Farmonlar">
              <CDBSidebarMenuItem icon="table">Farmonlar</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Hujjatlar/NormativHujjatlar">
              <CDBSidebarMenuItem icon="chart-line">Normativ Hujjatlar</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Hujjatlar/Dasturlar">
              <CDBSidebarMenuItem icon="table">Dasturlar</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Hujjatlar/Loyihalar">
              <CDBSidebarMenuItem icon="table">Loyihalar</CDBSidebarMenuItem>
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
