const express = require('express')

const home = require('./home')
const api = require('./api')
const todo = require('./todo')
const todoItems = require('./todoItems')

const nonRegisteredRouter = express.Router()

// Route accessible without authentification
nonRegisteredRouter
  .get('/', (req, res) => {
    home.render(req, res)
  })
  .get('/api', (req, res) => {
    api.render(req, res)
  })
  .post('/api/todos', (req, res) => {
    todo.create(req, res)
  })
  .get('/api/todos', (req, res) => {
    todo.getAll(req, res)
  })
  .post('/api/todos/:todoId/items', (req, res) => {
    todoItems.create(req, res)
  })
  .put('/api/todos/:todoId/items/:todoItemId', (req, res) => {
    todoItems.update(req, res)
  })
  .delete('/api/todos/:todoId/items/:todoItemId', (req, res) => {
    todoItems.delete(req, res)
  })
  .get('/api/todos/:todoId', (req, res) => {
    todo.get(req, res)
  })
  .put('/api/todos/:todoId', (req, res) => {
    todo.update(req, res)
  })
  .delete('/api/todos/:todoId', (req, res) => {
    todo.delete(req, res)
  })

module.exports = nonRegisteredRouter
