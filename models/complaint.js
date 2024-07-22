import mongoose from "mongoose";

const complaintSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    productType: { type: String, required: true },
    complaintType: { type: String, required: true },
    mobile: { type: Number, required: true },
    visitDate: { type: Date, required: true },
    status: { type: String, required: true },
    address: { type: String, required: true },
});

const Complaint = mongoose.models.Complaint || mongoose.model("Complaint", complaintSchema);

export default Complaint;
