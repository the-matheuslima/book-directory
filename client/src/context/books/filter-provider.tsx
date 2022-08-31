import axios from 'axios';
import { createContext, ReactNode, useEffect, useState } from 'react'
import { IBooksSubmit } from '../../interfaces/books';
import { v4 as uuidv4 } from 'uuid';

type ListContextProps = {
    children: ReactNode;
};

type BooksContext = {
    handlerFilterSearch: (searchInput: string) => void,
    searchValue: string
    handlerAddBook: () => void,
    modalAddBook: boolean,
    handlerSubmit: ({ title, subtitle, description, website, publisher, author }: IBooksSubmit) => void,
    handlerUpdateBook: () => void,
    modalUpdateBook: boolean,

}

export const BooksContext = createContext<BooksContext>({} as BooksContext);

export const BooksProvider = ({ children }: ListContextProps) => {
    const [searchValue, setSearchValue] = useState('');
    const [modalAddBook, setModalAddBook] = useState(false);
    const [modalUpdateBook, setModalUpdateBook] = useState(false);

    const handlerAddBook = () => {
        setModalAddBook(!modalAddBook)
    }

    const handlerFilterSearch = (searchInput: string) => {
        setSearchValue(searchInput)
    }

    const handlerUpdateBook = () => {
        setModalUpdateBook(!modalUpdateBook)
    }

    const handlerSubmit = ({ e, title, subtitle, description, website, publisher, author }: IBooksSubmit) => {

        if (title !== '' || subtitle !== '' || description !== '' || website !== '' || publisher !== '' || author !== '') {
            axios.post('http://localhost:3001/books/addbook', {
                title: title,
                subtitle: subtitle,
                description: description,
                website: website,
                publisher: publisher,
                author: author,
                isbn: uuidv4()
            })
        } else {
            return
        }
    };

    const handlerSubmitUpdate = ({ e, title, subtitle, description, website, publisher, author, id }: IBooksSubmit) => {
        console.log(title, subtitle, description, website, publisher, author);

        if (title !== '' || subtitle !== '' || description !== '' || website !== '' || publisher !== '' || author !== '') {
            axios.put(`http://localhost:3001/books//update/${id}`, {
                title: title,
                subtitle: subtitle,
                description: description,
                website: website,
                publisher: publisher,
                author: author,
                isbn: uuidv4()
            })
        } else {
            return
        }
    };

    const value = { handlerFilterSearch, searchValue, handlerAddBook, modalAddBook, handlerSubmit, handlerSubmitUpdate, handlerUpdateBook, modalUpdateBook }

    return (
        <BooksContext.Provider value={value}>
            {children}
        </BooksContext.Provider>
    )
}
