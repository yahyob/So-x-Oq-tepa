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
    <div style={{ display: 'flex', height: '80vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#1976D2">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a className="text-decoration-none" style={{ color: 'inherit' }}>
            Ma'lumotlar
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <Link exact to="/datas">
              <CDBSidebarMenuItem icon="columns">SuvXojaligi Fidoiylari</CDBSidebarMenuItem>
            </Link>
            <NavLink exact to="/datas/KorrupsiyagaQarshiKurash">
              <CDBSidebarMenuItem icon="user">Korrupsiyaga Qarshi Kurash</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/datas/RahbariyatMaruzalari">
              <CDBSidebarMenuItem icon="table">Rahbariyat Maruzalari</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/datas/Statistika">
              <CDBSidebarMenuItem icon="chart-line">Statistika</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/datas/SuvXojalikFaoliyatiTogrisida">
              <CDBSidebarMenuItem icon="table">Suv Xo'jalik Faoliyati Tog'risida</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/datas/RasmiyWebSahifa">
              <CDBSidebarMenuItem icon="table">Rasmiy Web Sahifa</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/datas/AxborotdanFoydalanuvchilarningSorovnomasi">
              <CDBSidebarMenuItem icon="table">Axborotdan Foydalanuvchilarning So'rovnomasi</CDBSidebarMenuItem>
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
