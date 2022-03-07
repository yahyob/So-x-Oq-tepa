import React from 'react';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Link } from 'react-router-dom';


const qonunlar = [
    {
        id: 1,
        title: "SUV RESURSLARIDAN FOYDALANISh SOHASIDA DAVLAT BOShQARUVI VA NAZORAT TIZIMINI YaNADA TAKOMILLAShTIRISh HAMDA SUV XO‘JALIGI OB'EKTLARI XAVFSIZLIGINI TA'MINLASh ChORA-TADBIRLARI TO‘G‘RISIDA",
        date: "",
        number: "",
        lexUrl: "https://lex.uz/docs/5360449",
        docxUrl: "/files/f1.pdf"
    },
    {
        id: 2,
        title: "O‘ZBEKISTON RESPUBLIKASI SUV XO‘JALIGINI RIVOJLANTIRIShNING 2020 — 2030 YILLARGA MO‘LJALLANGAN KONSEPSIYaSINI TASDIQLASh TO‘G‘RISIDA",
        date: "2020-07-10",
        number: "ПФ-6024",
        lexUrl: "https://lex.uz/pdfs/4892953",
        docxUrl: "/files/f2.pdf"
    },
    {
        id: 3,
        title: "QIShLOQ XO‘JALIGIDA YeR VA SUV RESURSLARIDAN SAMARALI FOYDALANISh ChORA-TADBIRLARI TO‘G‘RISIDA",
        date: "2019-06-17",
        number: "ПФ-5742",
        lexUrl: "http://lex.uz/docs/4378526",
        docxUrl: "/files/f3.pdf"
    },
    {
        id: 4,
        title: "QIShLOQ VA SUV XO‘JALIGI DAVLAT BOShQARUVI TIZIMINI TUBDAN TAKOMILLAShTIRISh ChORA-TADBIRLARI TO‘G‘RISIDA",
        date: "2018-04-17",
        number: "ПФ-5418",
        lexUrl: "http://lex.uz/docs/3687601",
        docxUrl: "/files/f4.html"
    },
]


const Qonunlar = () => {
    return (
        <section className='text-section'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title-name'>
                            <h3>Farmonlar</h3>
                            <div className='text-title-line'></div>
                        </div>
                    </div>
                </div>
                <div className='row pl-5 pr-5'>
                    {
                        qonunlar.map(item => (
                            <div key={item.id} className='col-12 mb-4 p-2'>
                                <Link className='text-dark text-decoration-none' to={`${item.id}`}>
                                    <h6>{item.title}</h6>
                                </Link>
                                <div className='qonun-date d-flex justify-content-between align-items-center'>
                                    <div>
                                        <span className='p-1 bg-secondary text-white'>Ro’yxatdan o’tish sanasi: {item.date}</span>
                                        <span className='p-1 bg-secondary text-white ml-3'>Raqami {item.number}</span>
                                    </div>
                                    <div>
                                        <a href={item.lexUrl} className='text-decoration-none font-italic'>Lex.uz da o’qish</a>
                                        <a href={item.docxUrl} target="_blank" rel="noopener noreferrer">
                                            <button className='btn btn-success ml-3' type="button">
                                                <FileDownloadIcon /> Yuklab olish
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </section>
    );
}

export default Qonunlar;
