import { Schema, model, models } from 'mongoose';

const ComplaintSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  complaintId: {
    type: String,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  mobile: {
    type: String, // Changed to String to accommodate phone number formats
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  complaintType: {
    type: String,
    required: true,
  },
  productType: {
    type: String,
    required: true,
  },
  visitDate: {
    type: Date, // Changed to Date type
    required: true,
  },
  status: {
    type: String,
    default: 'Pending', // Default status
  },

}, { timestamps: true }); 

const Complaint = models.Complaint || model('Complaint', ComplaintSchema);

export default Complaint;
