import Book from "./book"

export default function BookStore({books}){
    return(
        <div className="books">
            <h3>Book: {books.length}</h3>
            {
                books.map(book => <Book book={book}></Book>)
            }
        </div>
    )
}