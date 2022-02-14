import React from 'react';
import { Container, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarMain = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    {/* <Navbar.Brand href="#home"> */}
                    <Link className="navbar-brand" to="/">Logo</Link>
                    {/* </Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                            <NavDropdown title="Boshqarma" id="basic-nav-dropdown">
                                <Link className='dropdown-item' to="/boshqarmaHaqida">Boshqarma haqida</Link>
                                <Link className='dropdown-item' to="/raxbariyat">Raxbariyat</Link>
                                <Link className='dropdown-item' to="/boshqarmaNizomi">Boshqarma nizomi</Link>
                                <Link className='dropdown-item' to="/boshqarmaTuzilmasi">Boshqarma tuzilmasi</Link>
                                <Link className='dropdown-item' to="/hayat">Hayat</Link>
                                <Link className='dropdown-item' to="/suvBolimlari">Suv bo’limlari</Link>
                                <Link className='dropdown-item' to="/markaziyAparat">Markaziy aparat</Link>
                                <Link className='dropdown-item' to="/byudjetQonun">Byujet to’grisidagi qonunchilik</Link>
                                <Link className='dropdown-item' to="/ochiqMalumotlar">Ochiq ma’lumot</Link>
                                <Link className='dropdown-item' to="/elektronHukumat">Elektron hukumat</Link>
                                <Link className='dropdown-item' to="/boshIsh">Bo’sh ish o’rinlari</Link>
                                <Link className='dropdown-item' to="/tenderlarTanlov">Tenderlar va tanlovlar</Link>
                                <Link className='dropdown-item' to="/tadbirlar">Tadbirlar</Link>
                            </NavDropdown>

                            <NavDropdown title="Yangiliklar" id="basic-nav-dropdown">
                                <Link className='dropdown-item' to="/Yangiliklar">Yangiliklar</Link>
                                <Link className='dropdown-item' to="/AxborotXizmati">Axborot xizmati</Link>
                                <Link className='dropdown-item' to="/Elonlar">E'lonlar</Link>
                                <Link className='dropdown-item' to="/PresRelizlar">Pres relizlar</Link>
                                <Link className='dropdown-item' to="/OAVVakillar">OAV vakillar</Link>
                            </NavDropdown>

                            <NavDropdown title="Mediagalereya" id="basic-nav-dropdown">
                                <Link className='dropdown-item' to="/Fotogalereya">Fotogalereya</Link>
                                <Link className='dropdown-item' to="/VideoMaterial">Video material</Link>
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
