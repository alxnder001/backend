import * as bookModel from '../models/bookModel.js';

export const fetchAllBooks = async() =>{
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
};