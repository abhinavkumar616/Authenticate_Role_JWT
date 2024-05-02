const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  rid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Role',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  empcode: {
    type: String,
    required: true
  },
  mail_id: {
    type: String,
    required: true
  },
  phone_number: {
    type: String,
    required: true
  },
  password:{
    type:String,
    required: true
  }
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
