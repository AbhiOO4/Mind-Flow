
import express from 'express';
import authenticate from '../middleware/authenticate.js'
import rateLimiter from '../middleware/rateLimiter.js';
import {notesValidate, editNoteValidate} from '../middleware/notesValidation.js';

const router = express.Router()

import {getNotes, viewNote, editNote, createNote, deleteANote} from '../controllers/notes.js'

router.use(authenticate)

router.use(rateLimiter)

//get all notes
router.get('/', getNotes)

//get one note in detail
router.get('/:id', viewNote)

//make a edit request to notes
router.put('/:id',editNoteValidate, editNote)

//make a create request
router.post('/', notesValidate, createNote)

//delete a note
router.delete('/:id', deleteANote)

export default router

