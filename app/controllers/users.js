const { httpError } = require('../helpers/handleError')
const userModel = require('../models/users')

const getItems = async (req, res) => {
  try {
    const listAll = await userModel.find();
    //setTimeout(() => {
      res.send({ data: listAll })  
    //}, 2500);    
  } catch(e) {
    httpError(res, e)
  }  
}

const getItem = (req, res) => {
  res.send('getItem')
}

const createItem = async (req, res) => {
  try {
    const { name, age, email } = req.body    
    const resDetail = await userModel.create({
      name, age, email
    })     
    res.send({ data: resDetail })
  } catch(e) {
    httpError(res, e)
  }
}

const updateItem = (req, res) => {
  res.send('updateItem')
}

const deleteItem = (req, res) => {
  res.send('deleteItem')
}

module.exports = {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem
}