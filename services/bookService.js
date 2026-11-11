import * as bookModel from '../models/bookModel.js';

export const fetchAllBooks = async() =>{
<<<<<<< HEAD
    const books = await bookModel.fetch();
    return books;
}

//insert
export const createBook = async (book) => {
    if (book.name) {
        const bookId = await bookModel.insert(book);
        return bookId;
    }
};

//update
export const updateStudent = async(student) =>{
    const updateStudent = await studentModel.update(student);
    return updatedStudent;
}
//delete
export const deleteStudent = async (id) => {
    const deletedStudent = await studentModel.remove(id);

    return deletedStudent;
=======
    const books = bookModel.fetch();
    return books;
}

export const createBooks = async(book) =>{
    const bookId = await bookModel.insert(book);
    return bookId;
} 

//update
export const updateBooks = async(student) =>{
    const updatedBooks = await bookModel.update(book);
    return updatedBooks;
}

//dlelete
export const deleteBooks = async (id) => {
    const deletedBooks = await bookModel.remove(id);

    return deletedBooks;
>>>>>>> 55d4533b9f13550b455d4c33c862f7dba92f0f1c
};