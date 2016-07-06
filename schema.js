'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const timestemp = require('./plugin-timestemp.js')
const email =           require('./fields-email.js');
const cpf =    require('./fields-cpf');
const cnpj =           require('./fields-cnpj');
const url =         require('./fields-url');
const ip =        require('./fields-ip');
const created_at =     require('./fields-created_at');
const name = require('./fields-name');
const _schema = {
   email,
   cpf,
   cnpj,
   url,
   ip,
   created_at
};
const schema = new Schema(_schema);

const userSchema = new Schema {
    name
   ,dados: [userSchema]
}

const User = mongoose.model('User', userSchema);

//virtuals
schema
.virtual('url.full')
.get( function() {
    return this.url+'ip do url'+this.ip;
});
User.find({}, (err, data) => {
    if (err) console.log('erro', err);
    console.log('Full', url.full);
})
//methods
schema
.methods
.findUrl = function(cb) {
    return this.model('User').find({ email: this.email }, cb);
};
User.findUrl((err, data) => {
    if (err) return console.log('erro', err);
    return data.forEach((user) => console.log('email: ', email));
});
//static
Userschema
.statics
.search = function (name, cb) {
    return this.where('name', new RegExp(name, 'i')).exec(cb);
};
User.search('sostenes', (err, data) => {
    if (err) return console.log('erro: ', err);
    return data.forEach((user) => console.log('user: ', user));
});
//middlewares
Userschema.pre('save', (next) => {
    console.log('salvando...');
    next();
});
module.exports = User;



