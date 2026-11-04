import * as studentModel from '../models/studentModel.js';

export const fetchAllStudents = async() =>{
    const student = await studentModel.fetch();
    return student;
};

export const createStudent = async(student) =>{
    const studentId = await studentModel.insert(student);
    return studentId;
};

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