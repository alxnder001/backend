import * as studentService from "../services/studentService.js";

export const fetchAllstudent = async (req, res) => {
    const student = await studentService.fetchAllstudent();

    res.status(200).json(student);
};

export const createstudent = async (req, res) => {
    const { name, course } = req.body;

    const student = { name, course };

    try {
        const studentId = await studentService.createstudent(student);

        res.status(200).json({
            success: true,
            message: studentId
        });

    } catch (e) {
        console.log(e);

        res.status(500).json({
            error: "Internal Server Error"
        });
    }
};
