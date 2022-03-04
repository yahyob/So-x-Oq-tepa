import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Link } from 'react-router-dom';

// Example items, to simulate fetching from another resources.
const items = [
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
    ,
    {
        id: 5,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio. 4",
        date: "10.15.2000",
        number: "100-1",
        lexUrl: "https://lex.uz/docs/12328",
        docxUrl: "/assets/files/1.docx",
    },
    ,
    {
        id: 6,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio. 4",
        date: "10.15.2000",
        number: "100-1",
        lexUrl: "https://lex.uz/docs/12328",
        docxUrl: "/assets/files/1.docx",
    },
    ,
    {
        id: 7,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio. 4",
        date: "10.15.2000",
        number: "100-1",
        lexUrl: "https://lex.uz/docs/12328",
        docxUrl: "/assets/files/1.docx",
    },
    ,
    {
        id: 8,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio. 4",
        date: "10.15.2000",
        number: "100-1",
        lexUrl: "https://lex.uz/docs/12328",
        docxUrl: "/assets/files/1.docx",
    },
]

function Items({ currentItems }) {
    return (
        <>
            {currentItems &&
                currentItems.map(item => (
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
                ))}
        </>
    );
}

function PaginatedItems({ itemsPerPage }) {
    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <>
            <Items currentItems={currentItems} />
            <ReactPaginate
                breakLabel="..."
                nextLabel=" >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< "
                renderOnZeroPageCount={null}
            />
        </>
    );
}

export default PaginatedItems;