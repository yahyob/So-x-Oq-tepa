import React, {useState} from 'react';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Link } from 'react-router-dom';
import { useT } from '../../../custom/hooks/useT';
import { Pagination, Stack, Typography } from "@mui/material";



const qonunlar = [
    {
        id: 1,
        title: "MAVJUD YER VA SUV RESURSLARIDAN SAMARALI FOYDALANISH, 2020 YIL HOSILI UChUN QISHLOQ XO‘JALIGI EKINLARINI OQILONA JOYLASHTIRISH VA MAHSULOT YeTISHTIRISHNING PROGNOZ HAJMLARI TO‘G‘RISIDA",
        date: "",
        number: "",
        lexUrl: "https://lex.uz/docs/4660031",
        docxUrl: "/files/1.pdf",
    },
    {
        id: 2,
        title: "O‘ZBEKISTON RESPUBLIKASI SUV XO‘JALIGI VAZIRLIGI FAOLIYaTIGA DOIR AYRIM QONUNChILIK HUJJATLARINI TAKOMILLAShTIRISh TO‘G‘RISIDA",
        date: " 2021-09-17",
        number: "ВМҚ-573",
        lexUrl: "Https://lex.uz/docs/12328",
        docxUrl: "/files/1.docx",
    },
    {
        id: 3,
        title: "QIShLOQ XO‘JALIGI IShLAB ChIQARUVChILARINING SUVNI TEJAYDIGAN TEXNOLOGIYaLARNI JORIY ETISh BO‘YIChA XARAJATLARINING BIR QISMINI QOPLASh ChORA-TADBIRLARI TO‘G‘RISIDA",
        date: "2021-02-23",
        number: "ВМҚ-95",
        lexUrl: "https://lex.uz/docs/5304846",
        docxUrl: "/files/3.pdf",
    },
    {
        id: 4,
        title: "SUV TA'MINOTI OG‘IR HUDUDLARDAGI AHOLI TOMORQALARI VA QIShLOQ XO‘JALIGIDA FOYDALANILMAYoTGAN YeR MAYDONLARIGA SUV ChIQARISh IShLARINI DAVLAT TOMONIDAN QO‘LLAB-QUVVATLASh ChORA-TADBIRLARI TO‘G‘RISIDA",
        date: "2020-07-30",
        number: "ВМҚ-459",
        lexUrl: "https://lex.uz/docs/4923635",
        docxUrl: "/files/4.pdf",
    },
    {
        id: 5,
        title: "2020 YIL YoZGI SUG‘ORISh MAVSUMIDA EKIN MAYDONLARINI SUV BILAN IShONChLI TA'MINLASh VA SUV TANQISLIGINING OLDINI OLIShGA QARATILGAN KEChIKTIRIB BO‘LMAYDIGAN ChORA-TADBIRLAR TO‘G‘RISIDA",
        date: "2020-06-01",
        number: "ВМҚ-344",
        lexUrl: "https://lex.uz/docs/4837718",
        docxUrl: "/files/5.docx",
    },
    {
        id: 6,
        title: "SUV XO‘JALIGI SOHASIDAGI LOYIHA-QIDIRUV IShLARINI ILMIY-TEXNIK JIHATDAN KUZATIShNI TAShKIL ETISh VA MOLIYaLAShTIRISh TARTIBI TO‘G‘RISIDA",
        date: "2020-03-13",
        number: " ВМҚ-155",
        lexUrl: "https://lex.uz/docs/4763675",
        docxUrl: "/files/6.pdf",
    },
    {
        id: 7,
        title: "NASOS STANSIYaLARINI BOSQIChMA-BOSQICh MODERNIZASIYa QILISh HAMDA ALMAShTIRISh, NASOS STANSIYaLARIDAN FOYDALANIShNI VA ULARNI BOShQARIShNI AVTOMATLAShTIRISh BO‘YIChA ChORA-TADBIRLAR TO‘G‘RISIDA",
        date: "2018-12-26",
        number: "ВМҚ-1042",
        lexUrl: "https://lex.uz/docs/4127478",
        docxUrl: "/files/7.docx",
    },
    {
        id: 8,
        title: "EKOTURIZMNI RIVOJLANTIRISh VA SUV OMBORLARINING SUVNI MUHOFAZA QILISh ZONALARI DOIRASIDA YeR UChASTKALARI AJRATISh TARTIBINI TAKOMILLAShTIRISh BO‘YIChA ChORA-TADBIRLAR TO‘G‘RISIDA",
        date: "2018-12-03",
        number: "ВМҚ-978",
        lexUrl: "https://lex.uz/docs/4092613",
        docxUrl: "/files/8.docx",
    },
    {
        id: 9,
        title: "SUV XO‘JALIGI TIZIMIGA ZAMONAVIY AXBOROT-KOMMUNIKASIYa VA INNOVASION TEXNOLOGIYaLARNING JORIY ETILIShINI TA'MINLASh ChORA-TADBIRLARI TO‘G‘RISIDA",
        date: " 2018-09-10",
        number: " ВМҚ-714",
        lexUrl: "https://lex.uz/docs/3901290",
        docxUrl: "/files/9.pdf",
    },
    {
        id: 10,
        title: "QIShLOQ XO‘JALIGIDA SUV TEJOVChI TEXNOLOGIYaLARNI JORIY ETIShNI RAG‘BATLANTIRISh MEXANIZMLARINI KENGAYTIRISh ChORA-TADBIRLARI TO‘G‘RISIDA",
        date: "2019-12-25",
        number: "ПҚ-4499",
        lexUrl: "https://lex.uz/docs/4568386",
        docxUrl: "/files/10.pdf",
    },
    {
        id: 11,
        title: "RAQAMLI IQTISODIYoT VA ELEKTRON HUKUMATNI KENG JORIY ETISh ChORA-TADBIRLARI TO‘G‘RISIDA",
        date: "2021-04-28 ",
        number: "ПҚ-4699",
        lexUrl: "https://lex.uz/docs/4800657",
        docxUrl: "/files/11.docx",
    },
    {
        id: 12,
        title: "QIShLOQ XO‘JALIGIDA SUVNI TEJAYDIGAN TEXNOLOGIYaLARNI JORIY ETIShNI YaNADA JADAL TAShKIL ETISh ChORA-TADBIRLARI TO‘G‘RISIDA",
        date: " 2021-12-11",
        number: "ПҚ-4919",
        lexUrl: "https://lex.uz/docs/5157168",
        docxUrl: "/files/12.docx",
    },
    {
        id: 13,
        title: "O‘ZBEKISTON RESPUBLIKASI SUV XO‘JALIGI VAZIRLIGI FAOLIYaTINI YaNADA TAKOMILLAShTIRISh ChORA-TADBIRLARI TO‘G‘RISIDA",
        lexUrl: "https://lex.uz/docs/5360478",
    },
    {
        id: 14,
        title: "O‘ZBEKISTON RESPUBLIKASI SUV XO‘JALIGI VAZIRLIGI HUZURIDAGI SUV XO‘JALIGI SOHASIDAGI LOYIHALARNI AMALGA OShIRISh AGENTLIGI FAOLIYaTINI TAShKIL ETISh TO‘G‘RISIDA",
        date: " 2020-01-29",
        number: "45-sonli qaror",
        lexUrl: "https://www.lex.uz/docs/4719060",
        docxUrl: "/files/14.pdf",
    },
    {
        id: 15,
        title: "O‘ZBEKISTON RESPUBLIKASI HUKUMATINING AYRIM QARORLARIGA O‘ZGARTIRISh VA QO‘ShIMChALAR KIRITISh TO‘G‘RISIDA",
        date: " 2020-01-15",
        number: "26-sonli qaror",
        lexUrl: "https://www.lex.uz/search/nat?actnum=26&fyear=2020",
        docxUrl: "/files/15.pdf",
    },
    {
        id: 16,
        title: "Suv resurslarini boshqarish tizimini yanada takomillashtirish chora-tadbirlari to‘g‘risida",
        date: " 2019-10-09",
        number: "ПҚ-4486-sonli qaror",
        lexUrl: "https://www.lex.uz/docs/4545898",
        docxUrl: "/files/16.pdf",
    },
    {
        id: 17,
        title: "O‘ZBEKISTON RESPUBLIKASI HUDUDIDAGI SUV OB'EKTLARINING SUVNI MUHOFAZA QILISh VA SANITARIYa-MUHOFAZA ZONALARINI BELGILASh TARTIBI TO‘G‘RISIDAGI NIZOMNI TASDIQLASh HAQIDA",
        date: "2019-12-11",
        number: " 981-sonli qaror",
        lexUrl: "https://www.lex.uz/docs/4640429",
        docxUrl: "/files/17.pdf",
    },
    {
        id: 18,
        title: "Suv iste'molchilari uyushmalari faoliyatini takomillashtirish chora-tadbirlari to‘g‘risida",
        date: " 2019-12-11",
        number: "982-sonli qaror",
        lexUrl: "https://www.lex.uz/docs/4640131",
        docxUrl: "/files/18.pdf",
    }
    ,
    {
        id: 19,
        title: "«Samarqand viloyatida Bulung‘ur suv omborini qurish» loyihasini amalga oshirish chora-tadbirlari to‘g‘risida",
        date: "2019-05-17",
        number: "413-sonli qaror",
        lexUrl: "https://www.lex.uz/docs/4342371",
        docxUrl: "/files/19.pdf",
    }
    ,
    {
        id: 20,
        title: "O‘zbekiston Respublikasi Suv xo‘jaligi vazirligining «O‘zsuvqurilishta'minot» respublika birlashmasi tarkibidagi «Gidromexanizasiya» davlat unitar korxonasini tugatish to‘g‘risida",
        date: "2019-06-14",
        number: "497-sonli qaror",
        lexUrl: "https://www.lex.uz/docs/4378340",
        docxUrl: "/files/20.pdf",
    }
    ,
    {
        id: 21,
        title: "Samarqand shahri hududidagi kanallar va kollektor-drenaj tarmoqlarining holatini yaxshilash va atroflarini obodonlashtirish chora-tadbirlari to‘g‘risida",
        date: "2019-04-17",
        number: "322-sonli qaror",
        lexUrl: "https://www.lex.uz/docs/4290659",
        docxUrl: "/files/21.pdf",
    },
    {
        id: 22,
        title: "TABIATDAN FOYDALANISh SOHASIDA DAVLAT XIZMATLARI KO‘RSATIShNING AYRIM MA'MURIY REGLAMENTLARINI TASDIQLASh TO‘G‘RISIDA",
        date: "2018-03-31",
        number: "255-sonli",
        lexUrl: "http://lex.uz/docs/3646578",
        docxUrl: "/files/22.pdf",
    },
    {
        id: 23,
        title: "TOMChILATIB SUG‘ORISh TIZIMINI VA SUVNI TEJAYDIGAN BOShQA SUG‘ORISh TEXNOLOGIYaLARINI JORIY ETISh VA MOLIYaLAShTIRIShNI SAMARALI TAShKIL ETISh ChORA-TADBIRLARI TO‘G‘RISIDA",
        date: " 2013-06-21",
        number: "176-sonli",
        lexUrl: "http://lex.uz/docs/2191966",
        docxUrl: "/files/23.html",
    },
    {
        id: 24,
        title: "2019-2020 YILLARDA SUV TA'MINOTI OG‘IR BO‘LGAN HUDUDLARDAGI AHOLI TOMORQALARIGA SUV YeTKAZIB BERISh UChUN SUG‘ORISh QUDUQLARINI QAZIShGA DOIR ChORA-TADBIRLAR TO‘G‘RISIDA",
        date: "2018-12-14",
        number: "1019-son",
        lexUrl: "http://lex.uz/docs/4106932",
        docxUrl: "",
    },
    {
        id: 25,
        title: "2019 — 2021 YILLARDA TOShKENT VILOYaTINING IRRIGASIYa VA MELIORATSIYA TIZIMINI YaXShILASh DASTURI TO‘G‘RISIDA",
        date: "2018-12-04",
        number: "984-son",
        lexUrl: "http://lex.uz/docs/4092661",
        docxUrl: "/files/25.pdf",
    },
    {
        id: 26,
        title: "SUV XO‘JALIGI TAShKILOTLARI TOMONIDAN SANOAT VA ENERGETIKA TAShKILOTLARIGA TEXNIK SUV YeTKAZIB BERISh BO‘YIChA KO‘RSATILGAN XIZMATLAR UChUN HAQ TO‘LASh TARTIBI TO‘G‘RISIDAGI NIZOMNI TASDIQLASh HAQIDA",
        date: "2018-12-12",
        number: "1008-son",
        lexUrl: "http://lex.uz/docs/4102875",
        docxUrl: "/files/26.pdf",
    },
    {
        id: 27,
        title: "PAXTA XOM AShYoSI YeTIShTIRUVChILARNING TOMChILATIB SUG‘ORISh TEXNOLOGIYaSINI JORIY QILISh BILAN BOG‘LIQ XARAJATLARINI QOPLASh TARTIBI TO‘G‘RISIDAGI NIZOMNI TASDIQLASh HAQIDA",
        date: "2019-02-06",
        number: "ВМҚ-103",
        lexUrl: "http://lex.uz/pdfs/4192469",
        docxUrl: "/files/27.pdf",
    },
    {
        id: 28,
        title: "PAXTA XOM AShYoSINI YeTIShTIRIShDA TOMChILATIB SUG‘ORISh TEXNOLOGIYaLARIDAN KENG FOYDALANISh UChUN QULAY ShART-ShAROITLAR YaRATIShGA OID KEChIKTIRIB BO‘LMAYDIGAN ChORA-TADBIRLAR TO‘G‘RISIDA",
        date: "2018-12-27",
        number: "ПҚ-4087",
        lexUrl: "http://lex.uz/docs/4133396",
        docxUrl: "/files/28.pdf",
    },
    {
        id: 21,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio. 4",
        date: "10.15.2000",
        number: "100-1",
        lexUrl: "https://lex.uz/docs/12328",
        docxUrl: "/files/1.docx",
    },
    {
        id: 21,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio. 4",
        date: "10.15.2000",
        number: "100-1",
        lexUrl: "https://lex.uz/docs/12328",
        docxUrl: "/files/1.docx",
    },
    {
        id: 21,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio. 4",
        date: "10.15.2000",
        number: "100-1",
        lexUrl: "https://lex.uz/docs/12328",
        docxUrl: "/files/1.docx",
    },
    {
        id: 21,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio. 4",
        date: "10.15.2000",
        number: "100-1",
        lexUrl: "https://lex.uz/docs/12328",
        docxUrl: "/files/1.docx",
    },
    {
        id: 21,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio. 4",
        date: "10.15.2000",
        number: "100-1",
        lexUrl: "https://lex.uz/docs/12328",
        docxUrl: "/files/1.docx",
    },
    {
        id: 21,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio. 4",
        date: "10.15.2000",
        number: "100-1",
        lexUrl: "https://lex.uz/docs/12328",
        docxUrl: "/files/1.docx",
    },
    {
        id: 21,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio. 4",
        date: "10.15.2000",
        number: "100-1",
        lexUrl: "https://lex.uz/docs/12328",
        docxUrl: "/files/1.docx",
    },
    {
        id: 21,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio. 4",
        date: "10.15.2000",
        number: "100-1",
        lexUrl: "https://lex.uz/docs/12328",
        docxUrl: "/files/1.docx",
    },
    {
        id: 21,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio. 4",
        date: "10.15.2000",
        number: "100-1",
        lexUrl: "https://lex.uz/docs/12328",
        docxUrl: "/files/1.docx",
    },
    {
        id: 21,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio. 4",
        date: "10.15.2000",
        number: "100-1",
        lexUrl: "https://lex.uz/docs/12328",
        docxUrl: "/files/1.docx",
    }
]


const Qonunlar = () => {

    const { t, lang } = useT();
    const [page, setPage] = useState(1);
    const pages = page * 10;
    const handleChange = (event, value) => {
        setPage(value);
    };

    return (
        <section className='text-section'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title-name'>
                            <h3>{t(`Decisions.${lang}`)}</h3>
                            <div className='text-title-line'></div>
                        </div>
                    </div>
                </div>
                <div className='row pl-5 pr-5 pb-5'>

                    <Stack spacing={2}>
                        {
                                qonunlar.slice(pages-10, pages).map(item => (
                                    <div key={item.id} className='col-12 mb-4 p-2'>
                                        <Link className='text-dark text-decoration-none' to={`${item.id}`}>
                                            <h6>{item.title}</h6>
                                        </Link>
                                        <div className='qonun-date d-flex justify-content-between align-items-center'>
                                            <div>
                                                <span className='p-1 bg-secondary text-white'>{t(`RDate.${lang}`)}: {item.date}</span>
                                                <span className='p-1 bg-secondary text-white ml-3'>{t(`Number.${lang}`)}: {item.number}</span>
                                            </div>
                                            <div>
                                                <a href={item.lexUrl} className='text-decoration-none font-italic'>{t(`lex.${lang}`)}</a>
                                                <a href={item.docxUrl} target="_blank" rel="noopener noreferrer">
                                                    <button className='btn btn-success ml-3' type="button">
                                                        <FileDownloadIcon /> {t(`download.${lang}`)}
                                                    </button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))

                        }
                        <Pagination className='mx-auto' count={Math.ceil(qonunlar.length / 10)} page={page} onChange={handleChange} />
                    </Stack>
                </div>

            </div>
        </section>
    );
}

export default Qonunlar;




// import React from 'react';
// import PaginatedItems from './pagination';

// export default function () {
//   return (
//     <div>
//         <PaginatedItems itemsPerPage={4} />
//     </div>
//   )
// }
