
import express from 'express';

const router = express.Router()

import {getNotes, viewNote, editNote, createNote, deleteANote} from '../controllers/notes.js'

//get all notes
router.get('/', getNotes)

//get one note in detail
router.get('/:id', viewNote)

//make a edit request to notes
router.patch('/:id', editNote)

//make a create request
router.post('/', createNote)

//delete a note
router.delete('/:id', deleteANote)

export default router

