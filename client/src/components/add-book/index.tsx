import React, { useContext, useEffect, useState } from "react";
import { BooksContext } from "../../context/books/filter-provider";
import { MdOutlineClose } from "react-icons/md";
import './style.scss';
import FormBook from "../form-book";

function AddBook() {
    const { handlerAddBook, handlerSubmit } = useContext(BooksContext);

    return (
        <div className="addbook">
            <div className="addbook__box">
                <button className="addbook__box-close" onClick={handlerAddBook}><MdOutlineClose fontSize={'1.2rem'} /></button>

                <h3> ADD Book To List</h3>
                <FormBook onSubmit={handlerSubmit} />
            </div>
        </div>
    );
}

export default AddBook;
