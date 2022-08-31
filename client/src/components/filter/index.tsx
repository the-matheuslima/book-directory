import React, { useContext, useState } from "react";
import { BooksContext } from "../../context/books/filter-provider";
import './style.scss'

export default function Filter() {
    const { handlerFilterSearch, handlerAddBook } = useContext(BooksContext);

    return (
        <div className="filter">
            <input type="text" onChange={(e) => handlerFilterSearch(e.target.value)} />

            <button onClick={() => handlerAddBook()}>Add Book</button>
        </div>
    );
}
