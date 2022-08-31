import React, { useState } from "react";
import { IBooksSubmit } from "../../interfaces/books";
import './style.scss';


type Props = {
    onSubmit: ({ title, subtitle, description, website, publisher, author }: IBooksSubmit) => void
};

function FormBook({ onSubmit }: Props) {
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [description, setDescription] = useState('');
    const [website, setWebsite] = useState('');
    const [publisher, setPublisher] = useState('');
    const [author, setAuthor] = useState('');


    return (
        <form className="formbook">
            <div className="formbook__book">
                <div>
                    <input type="text" required placeholder="title" className="formbook__input" onChange={(e) => setTitle(e.target.value)} />
                    <input type="text" required placeholder="subtitle" className="formbook__input" onChange={(e) => setSubtitle(e.target.value)} />
                    <input type="text" required placeholder="author" className="formbook__input" onChange={(e) => setAuthor(e.target.value)} />
                    <input type="text" required placeholder="publisher" className="formbook__input" onChange={(e) => setPublisher(e.target.value)} />
                </div>
                <div>
                    <textarea required placeholder="description" className="formbook__textarea" onChange={(e) => setDescription(e.target.value)} ></textarea>
                    <input type="text" placeholder="website" className="formbook__input" onChange={(e) => setWebsite(e.target.value)} />
                </div>
            </div>
            <input type="submit" className="formbook__btn" onClick={(e) => onSubmit({ e, title, subtitle, description, website, publisher, author })} value='Send book' />
        </form>
    );
}

export default FormBook;
