import Complaint from "@/models/complaint";
import { connectToDB } from "@/utils/database";

export const POST = async (request) => {
    const { name, mobile, city, note } = await request.json();

    try {
        await connectToDB();
        const newComplaint = new Complaint({ name, mobile, city, note });
        await newComplaint.save();

        // Return a simplified response or just the ID of the created complaint
        return new Response(JSON.stringify({ id: newComplaint._id }), { status: 201 });
    } catch (error) {
        console.error('Failed to create a new complaint:', error);
        return new Response("Failed to create a new Complaint", { status: 500 });
    }
};
