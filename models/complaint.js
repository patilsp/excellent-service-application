import { Schema, model, models } from 'mongoose';

const ComplaintSchema = new Schema({

  id: {
    type: String,
  },
  userId: {
    type: String,
  },
  complaintId: {
    type: String,
  },
  name: {
    type: String,
    required: [true, 'Complaint Name is required.'],
  },
  mobile: {
    type: Number,
    required: [true, 'Complaint Price is required.'],
  },
   note: {
    type: String,
  },
  complaintType: {
    type: String,
  },
  model: {
    type: String,
  },

});

const Complaint = models.Complaint || model('Complaint', ComplaintSchema);

export default Complaint;
