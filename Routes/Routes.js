const express = require('express')
const router = express.Router()

const { getAllSubjects, saveSubject, updateSubject, updateAllSubject, deleteSubject } = require('../Controller/SubjectsControll')

const { getAllStudents, checkSingleStudent, findStudent, getSingleStudent, addStudent, updateStudent, deleteStudent } = require('../Controller/StudentsControl')

const { getAllAdmin, searchAdmin, loginAdmin, signupAdmin, updateAdmin, deleteAdmin } = require('../Controller/AdminControl')

const { getAllOpenclose, saveOpenclose, updateOpenclose, deleteOpenclose } = require('../Controller/OpencloseControl')



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
router.patch('/update-all-subject', updateSubject) //update all subject on database
router.delete('/delete-subject/:postId', deleteSubject) //delete a subject from database



//admin routes
router.get('/admin/all', getAllAdmin) //get all admin data
router.post('/admin/search', searchAdmin) //admin search route
router.post('/admin/login', loginAdmin) //admin login route
router.post('/admin/signup', signupAdmin) //admin signup route
router.patch('/admin/update/:postId', updateAdmin) //update an admin data
router.delete('/admin/delete/:postId', deleteAdmin) //delete an admin data


//open close routes
router.get('/openclose', getAllOpenclose) //get all openclose list
router.post('/save-openclose', saveOpenclose) //save an openclose on database
router.patch('/update-openclose/:postId', updateOpenclose) //update an openclose on database
router.delete('/delete-openclose/:postId', deleteOpenclose) //delete an openclose from database



module.exports = router