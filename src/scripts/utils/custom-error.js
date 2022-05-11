class NotFoundError extends Error {
  constructor (message) {
    super(message)
    this.name = 'Not Found'
    this.status = 404
  }
}

export {
  NotFoundError
}
