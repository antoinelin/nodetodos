const { TodoItem } = require('../../../../server/models')

module.exports = (req, res) => {
  return TodoItem
    .find({
      where: {
        id: req.params.todoItemId,
        todoId: req.params.todoId,
      },
    })
    .then((todoItem) => {
      if (!todoItem) {
        return res.status(404).send({
          message: 'TodoItem Not Found',
        })
      }

      return todoItem
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error))
    })
    .catch(error => res.status(400).send(error))
}
