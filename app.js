const express = require("express");
const app = express();
const axios = require("axios");

// //getting ready for making a post request
// app.use(express.json());

let data = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

//

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

//   app.post("/api/notes", (req, res) => {
//     const note = req.body;
//     console.log(note);
//     res.json(note);
//   });

//   app.get("/", (request, response) => {
//     response.send("<h1>Hello World!</h1>");
//   });

//   app.get("/api/notes", (request, response) => {
//     response.json(notes);
//   });

//   app.get("/api/notes/:id", (request, response) => {
//     const id = Number(request.params.id);
//     const note = notes.find((note) => note.id === id);

//     if (note) {
//       response.json(note);
//     } else {
//       response.status(404).end();
//     }
//   });
//   app.delete("/api/notes/:id", (request, response) => {
//     const id = Number(request.params.id);
//     notes = notes.filter((note) => note.id !== id);

//     response.status(204).end();
//   });
