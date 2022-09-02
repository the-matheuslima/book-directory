import axios from 'axios';
import { createContext, ReactNode, useState, useEffect } from 'react'
import { IBooksSubmit, IBooksForm, IBooks } from '../../interfaces/books';
import { v4 as uuidv4 } from 'uuid';
import books from '../../../../server/books.json'

type ListContextProps = {
    children: ReactNode;
};

type BooksContext = {
    handlerFilterSearch: (searchInput: string) => void,
    searchValue: string
    handlerAddBook: () => void,
    modalAddBook: boolean,
    handlerSubmit: () => void,
    handlerUpdateBook: () => void,
    modalUpdateBook: boolean,
    handlerForm: (e: { target: HTMLInputElement }) => void,
    setformFields: React.Dispatch<React.SetStateAction<IBooksForm>>,
    formFields: IBooksForm,
    handlerSubmitUpdate: (id: string | null) => void,
    books: IBooks[],
    setBooks: React.Dispatch<React.SetStateAction<IBooks[]>>
}

export const BooksContext = createContext<BooksContext>({} as BooksContext);

export const BooksProvider = ({ children }: ListContextProps) => {
    const [searchValue, setSearchValue] = useState('');
    const [modalAddBook, setModalAddBook] = useState(false);
    const [modalUpdateBook, setModalUpdateBook] = useState(false);

    const formDefault = {
        title: '',
        subtitle: '',
        description: '',
        website: '',
        publisher: '',
        author: ''
    }

    const [formFields, setformFields] = useState(formDefault);
    const { title, subtitle, description, website, publisher, author } = formFields
    const [books, setBooks] = useState<IBooks[]>([]);

    const handlerForm = (e: { target: HTMLInputElement }) => {
        const { name, value } = e.target;
        setformFields({ ...formFields, [name]: value })
    }

    const handlerAddBook = () => {
        setformFields(formDefault);
        setModalAddBook(!modalAddBook)
    }

    const handlerFilterSearch = (searchInput: string) => {
        setSearchValue(searchInput)
    }

    const handlerUpdateBook = () => {
        setModalUpdateBook(!modalUpdateBook);
    }

    const handlerSubmit = () => {
        if (title !== '' || subtitle !== '' || description !== '' || website !== '' || publisher !== '' || author !== '') {
            axios.post('http://localhost:3001/books/addbook', {
                title: title,
                subtitle: subtitle,
                description: description,
                website: website,
                publisher: publisher,
                author: author,
                isbn: uuidv4()
            }).then((res) => setBooks(res.data));
        } else {
            return
        }
    };

    const handlerSubmitUpdate = (id: string | null) => {
        if (title !== '' || subtitle !== '' || description !== '' || website !== '' || publisher !== '' || author !== '') {
            axios.put(`http://localhost:3001/books/update/${id}`, {
                title: title,
                subtitle: subtitle,
                description: description,
                website: website,
                publisher: publisher,
                author: author,
                isbn: uuidv4()
            }).then(res => setBooks(res.data))
        } else {
            return
        }
    };

    const value = { handlerFilterSearch, searchValue, handlerAddBook, modalAddBook, handlerSubmit, handlerSubmitUpdate, handlerUpdateBook, modalUpdateBook, handlerForm, setformFields, formFields, setBooks, books }

    return (
        <BooksContext.Provider value={value}>
            {children}
        </BooksContext.Provider>
    )
}
