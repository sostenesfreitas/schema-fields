const validate = (v) => {
    return v = 11;
}
module.exports = {
    type: Number
   ,required: true;
   ,validate: [validate, 'Apenas 11 digitos permitido'];
};