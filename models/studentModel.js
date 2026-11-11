import pool from '../config/db.js';

export const fetch = async () => {
<<<<<<< HEAD
    const [rows] = await pool.query("SELECT * FROM student");
    return rows;
};

// Insert

export const insert = async (student) =>{
    const [result] = await pool.query(
        "INSERT INTO student(name, srcode, program) VALUES (?,?,?)",
=======
    const [rows] = await pool.query("SELECT * FROM students");
    return rows;
};
export const insert = async (student) =>{
    const [result] = await pool.query(
        "INSERT INTO students(name, srcode, program) VALUES (?,?)",
>>>>>>> 55d4533b9f13550b455d4c33c862f7dba92f0f1c
        [student.name, student.srcode, student.program]
    );
    
    return result.insertId;
}

// Update 
<<<<<<< HEAD
export const update = async (student) => {
    const [result] = await pool.query(
        "UPDATE student SET name = ?, srcode= ?, program = ? WHERE id = ?",
        [student.name, student.srcode, student.program]
=======
export const update = async () => {
    const [result] = await pool.query(
        "UPDATE students SET name = ?, srcode = ?, program = ? WHERE id = ?",
        [student.name, student.srcode, student.program, student.id]
>>>>>>> 55d4533b9f13550b455d4c33c862f7dba92f0f1c
    );

    return result.affectedRows;
};

// Delete
export const remove = async (id) => {
    const [result] = await pool.query(
<<<<<<< HEAD
        "DELETE FROM student WHERE id = ?",
=======
        "DELETE FROM students WHERE id = ?",
>>>>>>> 55d4533b9f13550b455d4c33c862f7dba92f0f1c
        [id]
    );

    return result.affectedRows;
};