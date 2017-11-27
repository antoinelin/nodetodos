const { Todo } = require('../../../../server/models')

module.exports = (req, res) => {
  return Todo
    .findById(req.params.todoId)
    .then((todo) => {
      if (!todo) {
        return res.status(400).send({
          message: 'Todo Not Found',
        })
      }
      return todo
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error))
    })
    .catch(error => res.status(400).send(error))
}
