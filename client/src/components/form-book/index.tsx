import { useContext } from "react";
import { BooksContext } from "../../context/books/filter-provider";
import './style.scss';

type Props = {
    onSubmit: () => void
};

function FormBook({ onSubmit }: Props) {

    const { handlerForm, formFields } = useContext(BooksContext);

    return (
        <form className="formbook">
            <div className="formbook__book">
                <div>
                    <input type="text" required placeholder="title" name="title" value={formFields.title} className="formbook__input" onChange={(e) => handlerForm(e)} />
                    <input type="text" required placeholder="subtitle" name="subtitle" value={formFields.subtitle} className="formbook__input" onChange={(e) => handlerForm(e)} />
                    <input type="text" required placeholder="author" name="author" value={formFields.author} className="formbook__input" onChange={(e) => handlerForm(e)} />
                    <input type="text" required placeholder="publisher" name="publisher" value={formFields.publisher} className="formbook__input" onChange={(e) => handlerForm(e)} />
                </div>
                <div>
                    <input required placeholder="description" name="description" value={formFields.description} className="formbook__textarea" onChange={(e) => handlerForm(e)} ></input>
                    <input type="text" placeholder="website" className="formbook__input" name="website" onChange={(e) => handlerForm(e)} />
                </div>
            </div>
            <input type="button" className="formbook__btn" onClick={() => onSubmit()} value='Send book' />
        </form>
    );
}

export default FormBook;
