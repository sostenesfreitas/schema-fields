const _validate = (v) => /^((http|https|ftp|ftps):\/\/)?([a-z0-9\-]+\.)?[a-z0-9\-]+\.[a-z0-9]{2,4}(\.[a-z0-9]{2,4})?(\/.*)?$/.test(v);

 module.exports = {
  type: String
, validate: [_validate, 'URL ({VALUE}) inválida!']
, required: true

}