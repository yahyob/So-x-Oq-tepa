import React from 'react';
import { Container, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarMain = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <Link to="/">Logo</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Boshqarma" id="basic-nav-dropdown">
                                <NavDropdown.Item>
                                    <Link id="RouterNavLink" style={None} to="/boshqarmaHaqida">Boshqarma haqida</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    <Link to="/raxbariyat">Raxbariyat</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    <Link to="/boshqarmaNizomi">Boshqarma nizomi</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">
                                    <Link to="/boshqarmaTuzilmasi">Boshqarma tuzilmasi</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">
                                    Hayat
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Suv bo’limlari</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Markaziy aparat</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Byujet to’grisidagi qonunchilik</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Ochiq ma’lumot</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Elektron hukumat</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Bo’sh ish o’rinlari</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Tenderlar va tanlovlar</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Tadbirlar</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Yangiliklar" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Yangiliklar</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Axborot xizmati</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">E'lonlar</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Pres relizlar</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">OAV vakillar</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Mediagalereya" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Fotogalereya</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Video material</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Ma'lumotlar" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Suv xo’jaligi fidoiylari</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Korrupsiyaga qarshi kurash</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Rahbariyat maruzalari</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Statistika</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Suv xo’jalik faoliyati to’g’risida</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Rasmiy web sahifa</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Axborotdan foydalanuvchilarning so’rovnomasi</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Hujjatlar" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Qonunlar</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Qarorlar</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Farmonlar</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Normativ hujjatlar</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Dasturlar</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Loyihalar</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Interaktiv xizmatlar" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Jismoniy va yuridik shaxslar murojati</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Murojat yo’llash</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Tarjimai hol</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Ish tartibi</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#link">Foydali maslahatlar</Nav.Link>
                            <Nav.Link href="#link">Bog’lanish </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavbarMain;
