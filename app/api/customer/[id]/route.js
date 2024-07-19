import Customer from "@/models/customer";
import { connectToDB } from "@/utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDB();
        const customer = await Customer.findById(params.id);
        if (!customer) return new Response("Customer Not Found", { status: 404 });

        return new Response(JSON.stringify(customer), { status: 200 });
    } catch (error) {
        console.error("Error fetching customer details:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
};


export const PATCH = async (request, { params }) => {
    const { name, email, phone, address, dateofbirth, status } = await request.json();

    try {
        await connectToDB();

        // Find the existing customer by ID
        const existingCustomer = await Customer.findById(params.id);

        if (!existingCustomer) {
            return new Response("Customer not found", { status: 404 });
        }

        // Update the customer with new data
        existingCustomer.name = name;
        existingCustomer.email = email;
        existingCustomer.phone = phone;
        existingCustomer.address = address;
        existingCustomer.dateofbirth = dateofbirth;
        existingCustomer.status = status;

        await existingCustomer.save();

        return new Response("Successfully updated the Customer", { status: 200 });
    } catch (error) {
        return new Response("Error Updating Customer", { status: 500 });
    }
};

export const DELETE = async (request, { params }) => {
    console.log("Request Parameters:", params); // Log the parameters

    try {
        await connectToDB();

        const customerId = params.id; // Extract the ID from params

        if (!customerId) {
            return new Response("Customer ID is required", { status: 400 });
        }

        const result = await Customer.findByIdAndDelete(customerId);

        if (!result) {
            return new Response("Customer Not Found", { status: 404 });
        }

        return new Response("Customer deleted successfully", { status: 200 });
    } catch (error) {
        console.error("Error deleting customer:", error);
        return new Response("Error deleting Customer", { status: 500 });
    }
};


