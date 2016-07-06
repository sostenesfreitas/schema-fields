'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const timestemp = require('./plugin-timestemp.js')
const email     = require('./fields-email.js');
const cpf       = require('./fields-cpf');
const cnpj      = require('./fields-cnpj');
const url       = require('./fields-url');
const ip        = require('./fields-ip');
const created_at = require('./fields-created_at');
const name = require('./fields-name');

const schema = new Schema {
   email,
   cpf,
   cnpj,
   url,
   ip,
   created_at
};

const userSchema = new Schema {
    name
   ,dados: [schema]
}

schema.plugin(timestemp);

Userschema.pre('save', (next) => {
    console.log('salvando...');
    next();
});
schema
.virtual('url.full')
.get( function() {
    return this.url+'ip do url'+this.ip;
});

schema
.methods
.findUrl = function(cb) {
    return this.model('User').find({ email: this.email }, cb);
};

Userschema
.statics
.search = function (name, cb) {
    return this.where('name', new RegExp(name, 'i')).exec(cb);
};
