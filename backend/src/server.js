import dotenv from "dotenv";

dotenv.config({quiet: true})

import express from 'express';

const app = express()

import notesRoutes from './routes/notesRoutes.js';

import connectDB from './config/db.js';

app.use(express.json());

connectDB()

//routes
app.use('/api/notes', notesRoutes)


app.listen(process.env.PORT, () => {
    console.log("Server started at port 3000")
})