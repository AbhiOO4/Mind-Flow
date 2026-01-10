
import Note from '../model/Note.js'

export async function getNotes (req, res) {
    try{
        const notes = await Note.find()
        res.status(200).json(notes)
    }catch(error){
        console.error("Error in getAllNotes controller")
        res.status(500).json({message: "Internal server error"})
    }
}

export function viewNote (req, res) {
    res.status(200).send("fetched a single note")
}

export async function editNote(req, res) {
    res.status(200).send("Note updated successfully")
}

export async function createNote (req, res) {
    try{
        const {title, content} = req.body
        const newNote = new Note({title, content})
        const savedNote = await newNote.save()
        res.status(201).json(savedNote)
    }catch(error){
        console.error("Error in createNote controller")
        res.status(500).json({message: "Internal server error"})
    }
}

export async function deleteANote (req, res) {
    res.status(200).send("Note deleted successfully")
}