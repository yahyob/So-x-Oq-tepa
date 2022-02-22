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
      <div id='zindex' style={{ display: 'flex', overflow: 'scroll initial', zIndex:"21" }}>
        <CDBSidebar textColor="#fff" backgroundColor="#1976D2">
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a className="text-decoration-none" style={{ color: 'inherit' }}>
              Ma'lumotlar
            </a>
          </CDBSidebarHeader>
          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <Link   to="/datas">
                <CDBSidebarMenuItem icon="columns">SuvXojaligi Fidoiylari</CDBSidebarMenuItem>
              </Link>
              <NavLink   to="/datas/KorrupsiyagaQarshiKurash">
                <CDBSidebarMenuItem icon="user">Korrupsiyaga Qarshi Kurash</CDBSidebarMenuItem>
              </NavLink>
              <NavLink   to="/datas/RahbariyatMaruzalari">
                <CDBSidebarMenuItem icon="table">Rahbariyat Maruzalari</CDBSidebarMenuItem>
              </NavLink>
              <NavLink   to="/datas/Statistika">
                <CDBSidebarMenuItem icon="chart-line">Statistika</CDBSidebarMenuItem>
              </NavLink>
              <NavLink   to="/datas/SuvXojalikFaoliyatiTogrisida">
                <CDBSidebarMenuItem icon="table">Suv Xo'jalik Faoliyati Tog'risida</CDBSidebarMenuItem>
              </NavLink>
              <NavLink   to="/datas/RasmiyWebSahifa">
                <CDBSidebarMenuItem icon="table">Rasmiy Web Sahifa</CDBSidebarMenuItem>
              </NavLink>
              <NavLink   to="/datas/AxborotdanFoydalanuvchilarningSorovnomasi">
                <CDBSidebarMenuItem icon="table">Axborotdan Foydalanuvchilarning So'rovnomasi</CDBSidebarMenuItem>
              </NavLink>
            </CDBSidebarMenu>
          </CDBSidebarContent>
        </CDBSidebar>
      </div>
        <div>
          <Outlet />
        </div>
    </div>
  );
};

export default Sidebar;
