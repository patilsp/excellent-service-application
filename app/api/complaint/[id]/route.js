
import Complaint from "@/models/complaint";
import { connectToDB } from "@/utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDB();

        const Complaint = await Complaint.findById(params.id);
        if (!Complaint) return new Response("Complaint Not Found", { status: 404 });

        return new Response(JSON.stringify(Complaint), { status: 200 });
    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
};

export const PATCH = async (request, { params }) => {
    const { name, mobile, city, note } = await request.json();

    try {
        await connectToDB();

        // Find the existing Complaint by ID
        const existingComplaint = await Complaint.findById(params.id);

        if (!existingComplaint) {
            return new Response("Complaint not found", { status: 404 });
        }

        // Update the Complaint with new data
        existingComplaint.name = name;
        existingComplaint.mobile = mobile;
        existingComplaint.city = city;
        existingComplaint.note = note;
        existingComplaint.type = type;


        await existingComplaint.save();

        return new Response("Successfully updated the Complaint", { status: 200 });
    } catch (error) {
        return new Response("Error Updating Complaint", { status: 500 });
    }
};

export const DELETE = async (request, { params }) => {
    try {
        await connectToDB();

        // Find the Complaint by ID and remove it
        await Complaint.findByIdAndRemove(params.id);

        return new Response("Complaint deleted successfully", { status: 200 });
    } catch (error) {
        return new Response("Error deleting Complaint", { status: 500 });
    }
};
