import React from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { Link, NavLink, Outlet } from 'react-router-dom';
import './style.css';
import { useT } from '../../custom/hooks/useT';

const Sidebar = () => {
    const { t, lang } = useT()
    return (
        <div>
            <div className='container-fluid d-flex w-100 p-0 contact'>
                <div id='zindex' style={{ display: 'flex', overflow: 'scroll initial', zIndex: "21" }}>
                    <CDBSidebar textColor="#fff" backgroundColor="#1976D2">
                        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                            <a className="text-decoration-none" style={{ color: 'inherit' }}>
                                {t(`Boglanish.${lang}`)}
                            </a>
                        </CDBSidebarHeader>
                        <CDBSidebarContent className="sidebar-content">
                            <CDBSidebarMenu>
                                <Link to="/Boglanish">
                                    <CDBSidebarMenuItem icon="columns">{t(`AloqaXizmati.${lang}`)}</CDBSidebarMenuItem>
                                </Link>
                                <NavLink to="/Boglanish/murojat">
                                    <CDBSidebarMenuItem icon="user">{t(`fikrMulohaza.${lang}`)}</CDBSidebarMenuItem>
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
