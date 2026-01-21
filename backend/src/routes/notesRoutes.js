
import express from 'express';
import authenticate from '../middleware/authenticate.js'

const router = express.Router()

import {getNotes, viewNote, editNote, createNote, deleteANote} from '../controllers/notes.js'

//get all notes
router.get('/',authenticate, getNotes)

//get one note in detail
router.get('/:id',authenticate, viewNote)

//make a edit request to notes
router.put('/:id',authenticate, editNote)

//make a create request
router.post('/',authenticate, createNote)

//delete a note
router.delete('/:id',authenticate, deleteANote)

export default router

