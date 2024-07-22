import { Schema, model, models } from 'mongoose';

const InquirySchema = new Schema({

  id: {
    type: String,
  },
  userId: {
    type: String,
  },
  inquiryId: {
    type: String,
  },
  name: {
    type: String,
    required: [true, 'Inquiry Name is required.'],
  },
  mobile: {
    type: Number,
    required: [true, 'Inquiry Price is required.'],
  },
   note: {
    type: String,
  },
  inquiryType: {
    type: String,
  },
  model: {
    type: String,
  },

});

const Inquiry = models.Inquiry || model('Inquiry', InquirySchema);

export default Inquiry;
