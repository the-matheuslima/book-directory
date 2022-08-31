import React, { useContext, useEffect, useState } from "react";
import { BooksContext } from "../../context/books/filter-provider";
import { MdOutlineClose } from "react-icons/md";
// import './style.scss';
import FormBook from "../form-book";
import { useParams } from "react-router-dom";

function UpdateBook() {
    const a = useParams();
    console.log(a);

    const { handlerUpdateBook, handlerSubmit } = useContext(BooksContext);

    return (
        <div className="addbook">
            <div className="addbook__box">
                <button className="addbook__box-close" onClick={handlerUpdateBook}><MdOutlineClose fontSize={'1.2rem'} /></button>

                <h3> Update Book To List</h3>
                <FormBook onSubmit={handlerSubmit} />
            </div>
        </div>
    );
}

export default UpdateBook;
