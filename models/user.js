var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var UserSchema = new Schema (
  {
    first_name: {type: String, required: true, maxlength: 100 },
    family_name: {type: String, required: true, maxlength: 100 },
    date_of_birth: { type: Date},
    contact_info: {
      email: {type: String, required: [true, 'User email required']}
    }
  }
)

const User = mongoose.model('User', UserSchema );