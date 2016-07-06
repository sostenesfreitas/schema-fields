'use strict';
const Schema = require('./schema.js');
const Model = require('./model.js')(Schema,'User');

const CRUD = {

    save:     (data) => {
                const user = new Model(data);
                user.save((err,data) => {
                    if(err) return console.log('erro: ', err);
                    return console.log('Imseriu: ', data);
                });
            },

    update:   (query, mod, options) => {
                options = options || {};
                Model.update(query, mod, options, (err, data) => {
                    if (err) return console.log('erro', err);
                    return console.log('Atualizado: ', data);
                });
            },

    remove:   (query) => {
                Model.remove(query, (err, data) => {
                    if (err) return console.log('Erro', err);
                    return console.log('Deletado: ', data.result);
                });
            },

    retrieve: (query) => {
                Model.find(query, (err, data) => {
                    if (err) return console.log('erro: ', err);
                    return console.log('Acho: ', data);
                });
            },
            
    findFull: () => {
    	      Model.find({}, (err, data) => {
    		if (err) console.log('erro', err);
    		console.log('Full', url.full);
	});
     },
     
     findUrl: () => {
             Model.findUrl((err, data) => {
    		if (err) return console.log('erro', err);
    		return data.forEach((user) => console.log('email: ', email));
		});
          },  
          
          
     search: () => {
     	    Model.search('sostenes', (err, data) => {
    		if (err) return console.log('erro: ', err);
    		return data.forEach((user) => console.log('user: ', user));
		});     
	}
}



module.exports = CRUD;


