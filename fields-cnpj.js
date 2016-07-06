const _validate = (v) => /^(\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2})$/.test(v);

 module.exports  = {
  type: String
, validate: [_validate, 'CNPJ ({VALUE}) inválido!']
, required: true

}