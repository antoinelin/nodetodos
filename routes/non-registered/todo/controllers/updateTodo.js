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
      return todo
        .update({
          title: req.body.title || todo.title,
        })
        .then(() => res.status(200).send(todo)) // Send back the updated todo.
        .catch(error => res.status(400).send(error))
    })
    .catch(error => res.status(400).send(error))
}
