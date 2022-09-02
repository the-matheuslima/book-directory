import React, { useContext, useEffect, useState } from "react";
import { BooksContext } from "../../context/books/filter-provider";
import { MdOutlineClose } from "react-icons/md";
import FormBook from "../form-book";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

function UpdateBook() {
    const [urlParms, setUrlParms] = useSearchParams();

    const { handlerUpdateBook, handlerSubmitUpdate, setformFields } = useContext(BooksContext);

    useEffect(() => {
        console.log(urlParms.get('update'));
    }, [urlParms])

    return (
        <div className="addbook">
            <div className="addbook__box">
                <button className="addbook__box-close" onClick={handlerUpdateBook}><MdOutlineClose fontSize={'1.2rem'} /></button>

                <h3> Update Book To List</h3>
                <FormBook onSubmit={() => handlerSubmitUpdate(urlParms.get('update'))} />
            </div>
        </div>
    );
}

export default UpdateBook;
