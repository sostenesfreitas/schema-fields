'use strict';

const timestemp = (schema, options) => {
    schema.add({update_at: {type: Date, default: Date.now()}});
}
module.exports = timestemp;
