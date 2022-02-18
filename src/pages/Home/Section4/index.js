import React from 'react';
import { Link } from 'react-router-dom';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';
import RoomIcon from '@mui/icons-material/Room';

const Section4Home = () => {
    return (
        <footer>
            <div className="container">
                <div className='row'>
                    <div className='col-3'>
                        <h4 className='footer-title'>Sayt xaritasi</h4>
                        <ul>
                            <li>
                                <Link to="boshqarma">Boshqarma haqida</Link>
                            </li>
                            <li>
                                <Link to="News">Yangiliklar</Link>
                            </li>
                            <li>
                                <Link to="Fotogalereya">Mediagalereya</Link>
                            </li>
                            <li>
                                <Link to="datas">Ma’lumotlar</Link>
                            </li>
                            <li>
                                <Link to="Hujjatlar">Hujjatlat</Link>
                            </li>
                            <li>
                                <Link to="Interaktive">Interaktiv xizmatlar</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='col'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194199.73962474562!2d71.06908927256319!3d40.48917993530928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb028e966a39b1%3A0x9983221e39dd013!2sBag&#39;dod%20tumani!5e0!3m2!1suz!2s!4v1645178236402!5m2!1suz!2s" width="100%" height="100%" style={{ border: "0" }} allowFullScreen loading="lazy"></iframe>
                    </div>
                    <div className='col-4'>
                        <h4 className='footer-title'>Kontaktlar</h4>
                        <ul>
                            <li>
                                <a href='tel:998 90 000 00 00'> <PhoneIcon /> + 998 90 000 00 00</a>
                            </li>
                            <li>
                                <a href='#'> <EmailIcon /> Sox_Oqtepa@mail.ru</a>
                            </li>
                            <li>
                                <a href='#'> <TelegramIcon /> + 998 90 000 00 00</a>
                            </li>
                            <li>
                                <RoomIcon /> Farg’ona viloyati, Bag’dod tumani, Bag’dod shaxarchasi 25-uy.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Section4Home;
