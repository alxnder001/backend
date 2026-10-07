import * as bookController from '../services/bookService.js';

export const fetchAllBooks = async (req, res) => {
    const books = await bookController.fetchAllBooks();
    res.status(200).json(books);  
}
