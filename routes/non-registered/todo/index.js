const controllers = require('./controllers')

module.exports = {
  create(req, res) {
    controllers.create(req, res)
  },
  getAll(req, res) {
    controllers.getAll(req, res)
  },
  get(req, res) {
    controllers.get(req, res)
  },
  update(req, res) {
    controllers.update(req, res)
  },
  delete(req, res) {
    controllers.remove(req, res)
  },
}
