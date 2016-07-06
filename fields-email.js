'use strict';
const validate = (email) => {
    const er = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
    return er.test(email);
};
const getEmail = (email) => {
    return email.LowerCase();
}
module.exports = {
    type: String
   ,trim: true
   ,unique: true
   ,required: 'Email obrigatório'
   ,get:getEmail
   ,validate:[validate, 'Email invalido']
} ;