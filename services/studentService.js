import * as studentModel from '../models/studentModel.js';

export const fetchAllStudents = async() =>{
<<<<<<< HEAD
    const student = await studentModel.fetch();
    return student;
};

//insert
export const createStudent = async(student) =>{
    const studentId = await studentModel.insert(student);
    return studentId;
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
    const student = studentModel.fetch();
    return student;
}

export const createStudents = async(students) =>{
    const studentId = await bookModel.insert(students);
    return studentId;
} 

//update
export const updateStudents = async(student) =>{
    const updatedStudents = await studentModel.update(student);
    return updatedStudents;
}

//delete
export const deleteStudents = async (id) => {
    const deletedStudents = await studentModel.remove(id);

    return deletedStudents;
>>>>>>> 55d4533b9f13550b455d4c33c862f7dba92f0f1c
};