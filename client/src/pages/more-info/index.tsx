import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IBooks } from "../../interfaces/books";
import './style.scss'

function MoreInfo() {
    const [book, setBook] = useState<IBooks>();
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3001/books/${id}`)
            .then((res) => setBook(res.data[0]))
            .catch((err) => console.log(err)
            )
    }, [id]);

    return (
        <main className="moreinfo container">
            <section className="moreinfo__info">
                <div className="moreinfo__info-head">
                    <h1>{book?.title}</h1>
                    <h3>{book?.subtitle}</h3>
                </div>

                <div className="moreinfo__info-body">
                    <p className="moreinfo__info-desc">{book?.description}</p>

                    <div className="moreinfo__info-meta">
                        <p>{book?.pages}</p>
                        <p>{book?.publisher}</p>
                        <a href={book?.website} target='_blank'>{book?.website}</a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default MoreInfo;
