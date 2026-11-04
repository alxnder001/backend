import * as bookModel from '../models/bookModel.js';

export const fetchAllBooks = async() =>{
    const books = await bookModel.fetch();
    return books;
}

//update
export const updateStudent = async(student) =>{
    const updateStudent = await studentModel.update(student);
    return updatedStudent;
}
//update
export const deleteStudent = async (id) => {
    const deletedStudent = await studentModel.remove(id);

    return deletedStudent;
};