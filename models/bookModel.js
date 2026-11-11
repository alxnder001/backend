import pool from '../config/db.js';

export const fetch = async () => {
    const [rows] = await pool.query("SELECT * FROM book");
    return rows;
};

//insert
export const insert = async (book) => {
    const [result] = await pool.query(
        "INSERT INTO book (name, author) VALUES (?, ?)",
        [book.name, book.author]
    );
    return result.insertId;
};

// Update 
export const update = async (student) => {
    const [result] = await pool.query(
        "UPDATE student SET name = ?, srcode= ?, program = ? WHERE id = ?",
        [student.name, student.srcode, student.program]
    );

    return result.affectedRows;
};

// Delete
export const remove = async (id) => {
    const [result] = await pool.query(
        "DELETE FROM student WHERE id = ?",
        [id]
    );

    return result.affectedRows;
};