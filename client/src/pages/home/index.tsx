import React, { useContext, useEffect } from "react";
import { IBooks } from "../../interfaces/books";
import Filter from "../../components/filter";
import axios from 'axios';
import './style.scss'
import { BooksContext } from "../../context/books/filter-provider";
import { Link, useSearchParams } from "react-router-dom";
import AddBook from "../../components/add-book";
import UpdateBook from "../../components/update-book";


function Home() {
    const { searchValue, modalAddBook, modalUpdateBook, handlerSubmitUpdate, handlerUpdateBook, setformFields, books, setBooks } = useContext(BooksContext)

    const getAllBooks = () => {
        axios.get('http://localhost:3001/books')
            .then((res) => setBooks(res.data.books))
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        getAllBooks();
    }, []);

    const [parms, setParms] = useSearchParams();

    const Update = (b: IBooks) => {
        setParms({ update: b.isbn })
        setformFields(b)
        return handlerUpdateBook()
    }

    useEffect(() => {
        if (searchValue !== '') {
            const booksFilter = books.filter((books) => {
                return books.title.toLocaleLowerCase().includes(searchValue)
            })
            setBooks(booksFilter)
        } else {
            getAllBooks();
        }
    }, [searchValue])

    return (
        <>
            <main className="home container">
                <Filter />
                <h3 className="home__book-search">{searchValue}</h3>
                <ul className="home__books-list">
                    {books && books.map((book, index) => (
                        <li className="home__books-item" key={index}>
                            <h5 onClick={() => Update(book)}>Edit</h5>
                            <Link to={`/more-info/${book.isbn}`}><h2>{book.title}</h2></Link>
                            <h4>{book.subtitle}</h4>
                            <p>{book.author}</p>
                        </li>
                    ))}
                </ul>

            </main>
            {modalAddBook && <AddBook />}
            {modalUpdateBook && <UpdateBook />}

        </>

    );
}

export default Home;
