const { Todo } = require('../../../../server/models')
const { TodoItem } = require('../../../../server/models')

module.exports = (req, res) => {
  return Todo
    .findById(req.params.todoId, {
      include: [{
        model: TodoItem,
        as: 'todoItems',
      }],
    })
    .then((todo) => {
      if (!todo) {
        return res.status(404).send({
          message: 'Todo Not Found',
        })
      }
      return res.status(200).send(todo)
    })
    .catch(error => res.status(400).send(error))
}
