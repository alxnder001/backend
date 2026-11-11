import * as studentController from '../controllers/studentControllers.js';
import express from "express";

const studentRoutes = express.Router();

studentRoutes.get('/', studentController.fetchAllStudents);

studentRoutes.post('/', studentController.createStudents);

studentRoutes.put('/:id', studentController.editStudents);

studentRoutes.delete('/:id', studentController.deleteStudents);

export default studentRoutes;