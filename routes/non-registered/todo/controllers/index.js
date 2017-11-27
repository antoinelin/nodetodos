const create = require('./createTodo')
const getAll = require('./getTodos')
const get = require('./getTodo')
const update = require('./updateTodo')
const remove = require('./deleteTodo')

module.exports = {
  create,
  getAll,
  get,
  update,
  remove,
}
