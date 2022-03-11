import React from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import '../Boshqarma/style.css';
import { useT } from '../../custom/hooks/useT';

const Sidebar = () => {
    const { t, lang } = useT();
    const { pathname } = useLocation();

    const setActiveClass = (path) => {
        if(path === pathname) {
            return "active"
        }
        return ""
    }
    return (
        <div>
            <div className='container-fluid d-flex w-100 p-0 contact'>
                <div id='zindex' style={{ display: 'flex', overflow: 'scroll initial', zIndex: "21", borderRight: "1px solid rgb(197, 191, 191) " }}>
                    <CDBSidebar textColor="#000000" backgroundColor="#fff">
                        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                            <a className="text-decoration-none" style={{ color: 'inherit' }}>
                                {t(`Boglanish.${lang}`)}
                            </a>
                        </CDBSidebarHeader>
                        <CDBSidebarContent className="sidebar-content">
                            <CDBSidebarMenu>
                                <Link to="/Boglanish">
                                    <CDBSidebarMenuItem className={setActiveClass('/Boglanish')} icon="columns">{t(`AloqaXizmati.${lang}`)}</CDBSidebarMenuItem>
                                </Link>
                                <NavLink to="/Boglanish/murojat">
                                    <CDBSidebarMenuItem className={setActiveClass('/Boglanish/murojat')} icon="user">{t(`fikrMulohaza.${lang}`)}</CDBSidebarMenuItem>
                                </NavLink>
                            </CDBSidebarMenu>
                        </CDBSidebarContent>
                    </CDBSidebar>
                </div>
                <div className='w-100'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
