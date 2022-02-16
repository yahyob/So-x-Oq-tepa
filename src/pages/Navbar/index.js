import React from 'react';
import { Container, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import './style.css';

const NavbarMain = () => {
    return (
        <div className='Navbar' style={{position: "sticky", top: "0", zIndex: "12"}}>
            <Navbar expand="lg">
                <Container>
                    <Link className="navbar-brand" to="/">
                        <HomeIcon sx={{ color: 'white' }} fontSize="large" />
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="boshqarma">
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
                            </Link>

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
                                <Link className='dropdown-item' to="/SuvXojaligiFidoiylari">Suv xo’jaligi fidoiylari</Link>
                                <Link className='dropdown-item' to="/KorrupsiyagaQarshiKurash">Korrupsiyaga qarshi kurash</Link>
                                <Link className='dropdown-item' to="/RahbariyatMaruzalari">Rahbariyat maruzalari</Link>
                                <Link className='dropdown-item' to="/Statistika">Statistika</Link>
                                <Link className='dropdown-item' to="/SuvXojalikFaoliyatiTogrisida">Suv xo’jalik faoliyati to’g’risida</Link>
                                <Link className='dropdown-item' to="/RasmiyWebSahifa">Rasmiy web sahifa</Link>
                                <Link className='dropdown-item' to="/AxborotdanFoydalanuvchilarningSorovnomasi">Axborotdan foydalanuvchilarning so’rovnomasi</Link>
                                <Link className='dropdown-item' to="/FoydaliMaslahatlar">Foydali Maslahatlar</Link>
                            </NavDropdown>

                            <NavDropdown title="Hujjatlar" id="basic-nav-dropdown">
                                <Link className='dropdown-item' to="/Qonunlar">Qonunlar</Link>
                                <Link className='dropdown-item' to="/Qarorlar">Qarorlar</Link>
                                <Link className='dropdown-item' to="/Farmonlar">Farmonlar</Link>
                                <Link className='dropdown-item' to="/NormativHujjatlar">Normativ hujjatlar</Link>
                                <Link className='dropdown-item' to="/Dasturlar">Dasturlar</Link>
                                <Link className='dropdown-item' to="/Loyihalar">Loyihalar</Link>
                            </NavDropdown>

                            <NavDropdown title="Interaktiv xizmatlar" id="basic-nav-dropdown">
                                <Link className='dropdown-item' to="/JismoniyVaYuridikShaxslar">Jismoniy va yuridik shaxslar murojati</Link>
                                <Link className='dropdown-item' to="/MurojatYollash">Murojat yo’llash</Link>
                                <Link className='dropdown-item' to="/TarjimaiHol">Tarjimai hol</Link>
                                <Link className='dropdown-item' to="/IshTartibi">Ish tartibi</Link>
                            </NavDropdown>
                            {/* <Link className='nav-link' to="/FoydaliMaslahatlar">Foydali maslahatlar</Link> */}
                            <Link className='nav-link' to="/Boglanish">Bog’lanish</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavbarMain;
