const { Todo } = require('../../../../server/models')
const { TodoItem } = require('../../../../server/models')

module.exports = (req, res) => {
  return Todo
    .findAll({
      include: [{
        model: TodoItem,
        as: 'todoItems',
      }],
    })
    .then(todos => res.status(201).send(todos))
    .catch(error => res.status(400).send(error))
}
