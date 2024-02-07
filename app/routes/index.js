const express = require('express')
const router = express.Router()
const fs = require('fs')

const pathRouter = `${__dirname}`

const removeExtension = (fileName)  => {
  return fileName.split('.').shift()
}

fs.readdirSync(pathRouter).filter((file) => {
  const fileWithoutExt = removeExtension(file)
  const skip = ['index'].includes(fileWithoutExt)
  if(!skip) { 
    router.use(`/${fileWithoutExt}`, require(`./${fileWithoutExt}`)) // TODO: localhost/users
    console.log('ruta --->', removeExtension(file))
  }  
})

router.get('*', (req, res) => {
  res.status(404).send({ error: 'Not found' })
})

module.exports = router