const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ServiceSchema = new Schema(
  {
    date: { type: Date, require: true},
    name: { type: String, require: [true, "Please provide a name"], maxlength: 100 },
    fulfilled: Boolean,
    _serviceId: Schema.Types.ObjectId,
    updated: { type: Date, default: Date.now() },
    service: {
      type: String,
      required: true,
      enum: ['drywall', 'painting', 'moving']
    },
    contact: {
      phone: { type: String, maxlength: 15 },
      email: { type: String },
    },
    location: {
      address: {type: String}
    }

  }
)

/*
* Virtual for user's full name
*/
ServiceSchema
  .virtual('name')
  .get(() => {
    return this.family_name + ', ' + this.first_name;
  });

/*
* Virtual for user's contact info
*/
ServiceSchema
  .virtual('contact')
  .get(() => {
    return 'Email: ' + this.contact.email + ', Phone:' + this.contact.phone;
  });

/*
* Virtual for user's location
*/
ServiceSchema
  .virtual('address')
  .get(() => {
    return 
  })

/*
* Virtual for appointment URL
*/
ServiceSchema
  .virtual('url')
  .get(() => {
    return '/users/' + this._id;
  })


const Service = mongoose.model('Service', Service );

module.exports = Service;