const httpError = (res, err) => {
  console.log(err)
  res.status(500).json({ error: 'Algo ocurrio' })
}

module.exports = { httpError }