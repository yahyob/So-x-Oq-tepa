import React from 'react';
import { Container, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import './style.css';

const NavbarMain = () => {
    return (
        <div className='Navbar'>
            <Navbar expand="lg">
                <Container>
                    <Link className="navbar-brand" to="/">
                        <HomeIcon sx={{ color: 'white' }} fontSize="large" />
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='nav-link' to="/boshqarma">BOSHQARMA</Link>
                            <Link className='nav-link' to="/News">YANGILIKLAR</Link>
                            <NavDropdown title="MEDIAGALEREYA" id="basic-nav-dropdown">
                                <Link className='dropdown-item' to="/Fotogalereya">Fotogalereya</Link>
                                <Link className='dropdown-item' to="/VideoMaterial">Video material</Link>
                            </NavDropdown>
                            <Link className='nav-link' to="/datas">MA'LUMOTLAR</Link>
                            <Link className='nav-link' to="/Hujjatlar">HUJJATLAR</Link>
                            <Link className='nav-link' to="/Interaktive">INTERAKTIV</Link>
                            <Link className='nav-link' to="/Boglanish">BOG'LANISH</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavbarMain;
