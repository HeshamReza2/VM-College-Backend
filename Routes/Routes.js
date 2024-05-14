const express = require('express')
const router = express.Router()

const { getAllSubjects, saveSubject, updateSubject, deleteSubject } = require('../Controller/SubjectsControll')

const { getAllStudents, checkSingleStudent, findStudent, getSingleStudent, addStudent, updateStudent, deleteStudent } = require('../Controller/StudentsControl')

const { getAllAdmin, searchAdmin, loginAdmin, signupAdmin, updateAdmin, deleteAdmin } = require('../Controller/AdminControl')



//students routes
router.get('/students', getAllStudents) //get all students data
router.post('/check-student', checkSingleStudent) // check a single student data
router.post('/find-student', findStudent) // find student data using any field
router.post('/single-student', getSingleStudent) // get a single student data
router.post('/add-student', addStudent) // add a student data
router.patch('/update-student/:postId', updateStudent) //update a student data
router.delete('/delete-student/:postId', deleteStudent) // delete a students data


//subject routes
router.get('/subjects', getAllSubjects) //get all the subjects list
router.post('/save-subject', saveSubject) //save a subject on database
router.patch('/update-subject/:postId', updateSubject) //update a subject on database
router.delete('/delete-subject/:postId', deleteSubject) //delete a subject from database



//admin routes
router.get('/admin/all', getAllAdmin) //get all admin data
router.post('/admin/search', searchAdmin) //admin search route
router.post('/admin/login', loginAdmin) //admin login route
router.post('/admin/signup', signupAdmin) //admin signup route
router.patch('/admin/update/:postId', updateAdmin) //update an admin data
router.delete('/admin/delete/:postId', deleteAdmin) //delete an admin data



module.exports = router