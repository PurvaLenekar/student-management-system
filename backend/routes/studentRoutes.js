const express = require("express");

const router = express.Router();

const Student = require("../models/Student");


// CREATE STUDENT
router.post("/", async (req, res) => {

    try {

        const newStudent = new Student(req.body);

        const savedStudent = await newStudent.save();

        res.json(savedStudent);

    } catch (error) {

        res.status(500).json(error);

    }

});


// GET ALL STUDENTS
router.get("/", async (req, res) => {

    try {

        const students = await Student.find();

        res.json(students);

    } catch (error) {

        res.status(500).json(error);

    }

});


// UPDATE STUDENT
router.put("/:id", async (req, res) => {

    try {

        const updatedStudent = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(updatedStudent);

    } catch (error) {

        res.status(500).json(error);

    }

});


// DELETE STUDENT
router.delete("/:id", async (req, res) => {

    try {

        await Student.findByIdAndDelete(req.params.id);

        res.json({
            message: "Student deleted"
        });

    } catch (error) {

        res.status(500).json(error);

    }

});

module.exports = router;