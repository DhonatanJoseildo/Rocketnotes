const { Router } = require("express");

const usersRouter = require("./users.routes.js");
const notesRouter = require("./notes.routes.js");

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/notes", notesRouter);

module.exports = routes;