module.exports = {
  render(req, res) {
    res.status(200).send({
      message: 'Welcome to the Todos API!',
    })
  },
}
