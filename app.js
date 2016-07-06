const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/teste');
const CRUD = require('./CRUD.js');

//CRUD.save(data)
//CRUD.update(query, mod, options)
//CRUD.remove(query)
//CRUD.retrieve(query)
//CRUD.findFull()
//CRUD.findUrl()
//CRUD.search()