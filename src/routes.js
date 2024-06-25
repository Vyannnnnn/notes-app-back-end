const { addNoteHandler, getAllNotesHandler, getNotesByHandler, editNoteByHandler, deleteByIdHandler } = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/notes",
    handler: addNoteHandler,
  },
  {
    method: "GET",
    path: "/notes",
    handler: getAllNotesHandler,
  },
  {
    method: "GET",
    path: "/notes/{id}",
    handler: getNotesByHandler,
  },
  {
    method: "PUT",
    path: "/notes/{id}",
    handler: editNoteByHandler,
  },
  {
    method: "DELETE",
    path: "/notes/{id}",
    handler: deleteByIdHandler,
  },
];

module.exports = routes;
