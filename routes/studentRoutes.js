import * as studentController from '../controllers/studentControllers.js';
import express from "express";

const studentRoutes = express.Router();

studentRoutes.get('/', studentController.fetchAllstudent);

studentRoutes.post('/', studentController.createstudent);

export default studentRoutes;