const _validate = (v) => /^(((1[0-9]|[1-9]?)[0-9]|2([0-4][0-9]|5[0-5]))\.){3}((1[0-9]|[1-9]?)[0-9]|2([0-4][0-9]|5[0-5]))$/.test(v);

module.exports  = {
  type: String
, validate: [_validate, 'IP ({VALUE}) inválido!']
, required: true
}