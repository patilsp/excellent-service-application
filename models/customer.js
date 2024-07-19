import { Schema, model, models } from 'mongoose';

const CustomerSchema = new Schema({
  id: {
    type: String,
  },  
  userId: {
    type: String,
    required: true, 
  },
  customerId:{
    type: String,
  },
  name: {
    type: String,
    required: [true, 'Customer Name is required.'],
  },
  phone: {
    type: String,
    required: [true, 'Customer Phone is required.'], // Corrected message
  },
  email: {
    type: String,
  },
  address: {
    type: String,
  },
  dateofbirth: {
    type: Date, // Changed to Date type
  },
  status: {
    type: String,
  },
}, {
  timestamps: true, // Adds createdAt and updatedAt fields
});

const Customer = models.Customer || model('Customer', CustomerSchema);

export default Customer;
