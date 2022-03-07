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

// const NavlinkDatas = [
//   {
//     text: "Malumotlar",
//   }
// ]

const Sidebar = () => {
  const { t, lang } = useT()


  return (

    <div>
      <div className='container-fluid d-flex w-100 p-0'>
        <div id='zindex' style={{ display: 'flex', overflow: 'scroll initial', zIndex: "21" }}>
          <CDBSidebar textColor="#fff" backgroundColor="#1976D2">
            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
              <a className="text-decoration-none" style={{ color: 'inherit' }}>
                {t(`Malumotlar.${lang}`)}
              </a>
            </CDBSidebarHeader>
            <CDBSidebarContent className="sidebar-content">
              <CDBSidebarMenu>
                {/* {
                  NavlinkDatas.map((navLinkData, idx) => (
                    <Link key={idx} to={navLinkData.to}>
                      <CDBSidebarMenuItem icon={navLinkData.icon}>{t(`${navLinkData.text}.${lang}`)}</CDBSidebarMenuItem>
                    </Link>
                  ))
                } */}
                <Link to="/datas">
                  <CDBSidebarMenuItem icon="columns">{t(`Fidoiy.${lang}`)}</CDBSidebarMenuItem>
                </Link>
                <NavLink to="/datas/KorrupsiyagaQarshiKurash">
                  <CDBSidebarMenuItem icon="user">{t(`korrupsiyaTitle.${lang}`)}</CDBSidebarMenuItem>
                </NavLink>
                <NavLink to="/datas/RahbariyatMaruzalari">
                  <CDBSidebarMenuItem icon="table">{t(`maruza.${lang}`)}</CDBSidebarMenuItem>
                </NavLink>
                <NavLink to="/datas/Statistika">
                  <CDBSidebarMenuItem icon="chart-line">{t(`Statistics.${lang}`)}</CDBSidebarMenuItem>
                </NavLink>
                <NavLink to="/datas/SuvXojalikFaoliyatiTogrisida">
                  <CDBSidebarMenuItem icon="table">{t(`faol.${lang}`)}</CDBSidebarMenuItem>
                </NavLink>
                <NavLink to="/datas/RasmiyWebSahifa">
                  <CDBSidebarMenuItem icon="table">{t(`web.${lang}`)}</CDBSidebarMenuItem>
                </NavLink>
                <NavLink to="/datas/AxborotdanFoydalanuvchilarningSorovnomasi">
                  <CDBSidebarMenuItem icon="table">{t(`sorovnoma.${lang}`)}</CDBSidebarMenuItem>
                </NavLink>
              </CDBSidebarMenu>
            </CDBSidebarContent>
          </CDBSidebar>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
