const express = require('express');
const router = express.Router()

const fs = require ("fs")

const path = require("path")
router.get("/notes", (req,res)=> {
    fs.readFile(path.join(__dirname,".." ,"db","db.json" ),"utf8",(err, data) =>{
        if (err){console.log ("err")}
        res.json(JSON.parse(data))
    } )
})
router.post("/notes", (req,res) => {
    console.log(req.body)
    fs.readFile(path.join(__dirname,".." ,"db","db.json" ),"utf8",(err, data) =>{
        if (err){console.log ("err")}
        const notes = JSON.parse(data)
        const lastId = notes[notes.length-1].id
        const newId = parseInt(lastId)+1
       const submittedNote = req.body
       const newNote = {title: submittedNote.title, text: submittedNote.text , id:newId }
       notes.push(newNote)
       fs.writeFile(path.join(__dirname,".." ,"db","db.json" ), JSON.stringify(notes), (err)=> {
        if (err){console.log ("err")}
        res.send(newNote)
       } )
    } )
})


module.exports = router