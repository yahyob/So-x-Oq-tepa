import React, {useState} from 'react';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Link } from 'react-router-dom';
import { useT } from '../../../custom/hooks/useT';
import { Pagination, Stack, Typography } from "@mui/material";



const qonunlar = [
    {
        id: 1,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio.",
        date: "10.15.2000",
        number: "100-1",
        lexUrl: "https://lex.uz/docs/12328",
        docxUrl: "/assets/files/1.docx",
    },
    {
        id: 2,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio. 2",
        date: "10.15.2000",
        number: "100-1",
        lexUrl: "https://lex.uz/docs/12328",
        docxUrl: "/assets/files/1.docx",
    },
    {
        id: 3,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio. 3",
        date: "10.15.2000",
        number: "100-1",
        lexUrl: "https://lex.uz/docs/12328",
        docxUrl: "/assets/files/1.docx",
    },
    {
        id: 4,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio. 4",
        date: "10.15.2000",
        number: "100-1",
        lexUrl: "https://lex.uz/docs/12328",
        docxUrl: "/assets/files/1.docx",
    },
    {
        id: 5,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio. 4",
        date: "10.15.2000",
        number: "100-1",
        lexUrl: "https://lex.uz/docs/12328",
        docxUrl: "/assets/files/1.docx",
    },
    {
        id: 6,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio. 4",
        date: "10.15.2000",
        number: "100-1",
        lexUrl: "https://lex.uz/docs/12328",
        docxUrl: "/assets/files/1.docx",
    },
    {
        id: 7,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio. 4",
        date: "10.15.2000",
        number: "100-1",
        lexUrl: "https://lex.uz/docs/12328",
        docxUrl: "/assets/files/1.docx",
    },
    {
        id: 8,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio. 4",
        date: "10.15.2000",
        number: "100-1",
        lexUrl: "https://lex.uz/docs/12328",
        docxUrl: "/assets/files/1.docx",
    },
    {
        id: 9,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio. 4",
        date: "10.15.2000",
        number: "100-1",
        lexUrl: "https://lex.uz/docs/12328",
        docxUrl: "/assets/files/1.docx",
    },
    {
        id: 10,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio. 10",
        date: "10.15.2000",
        number: "100-1",
        lexUrl: "https://lex.uz/docs/12328",
        docxUrl: "/assets/files/1.docx",
    },
    {
        id: 11,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio. 11",
        date: "10.15.2000",
        number: "100-1",
        lexUrl: "https://lex.uz/docs/12328",
        docxUrl: "/assets/files/1.docx",
    },
    {
        id: 12,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio. 4",
        date: "10.15.2000",
        number: "100-1",
        lexUrl: "https://lex.uz/docs/12328",
        docxUrl: "/assets/files/1.docx",
    },
    {
        id: 13,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio. 4",
        date: "10.15.2000",
        number: "100-1",
        lexUrl: "https://lex.uz/docs/12328",
        docxUrl: "/assets/files/1.docx",
    },
    {
        id: 14,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio. 4",
        date: "10.15.2000",
        number: "100-1",
        lexUrl: "https://lex.uz/docs/12328",
        docxUrl: "/assets/files/1.docx",
    },
    {
        id: 15,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio. 4",
        date: "10.15.2000",
        number: "100-1",
        lexUrl: "https://lex.uz/docs/12328",
        docxUrl: "/assets/files/1.docx",
    },
    {
        id: 16,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio. 4",
        date: "10.15.2000",
        number: "100-1",
        lexUrl: "https://lex.uz/docs/12328",
        docxUrl: "/assets/files/1.docx",
    },
    {
        id: 17,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio. 4",
        date: "10.15.2000",
        number: "100-1",
        lexUrl: "https://lex.uz/docs/12328",
        docxUrl: "/assets/files/1.docx",
    },
    {
        id: 18,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio. 4",
        date: "10.15.2000",
        number: "100-1",
        lexUrl: "https://lex.uz/docs/12328",
        docxUrl: "/assets/files/1.docx",
    }
    ,
    {
        id: 19,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio. 4 pagination 2",
        date: "10.15.2000",
        number: "100-1",
        lexUrl: "https://lex.uz/docs/12328",
        docxUrl: "/assets/files/1.docx",
    }
    ,
    {
        id: 20,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio. 20",
        date: "10.15.2000",
        number: "100-1",
        lexUrl: "https://lex.uz/docs/12328",
        docxUrl: "/assets/files/1.docx",
    }
    ,
    {
        id: 21,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio. 4",
        date: "10.15.2000",
        number: "100-1",
        lexUrl: "https://lex.uz/docs/12328",
        docxUrl: "/assets/files/1.docx",
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
