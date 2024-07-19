import Customer from "@/models/customer";
import { connectToDB } from "@/utils/database";

export const POST = async (request) => {
    const { userId, name, email, phone, address, dateofbirth, status } = await request.json();
    
    console.log('Request Data:', { userId, name, email, phone, address, dateofbirth, status });
  
    try {
      await connectToDB();
      const newCustomer = new Customer({ userId, name, email, phone, address, dateofbirth, status });
  
      // console.log('New Customer:', newCustomer);
  
      await newCustomer.save();
      return new Response(JSON.stringify(newCustomer), { status: 201 });
    } catch (error) {
      console.error('Error creating customer:', error);
      return new Response("Failed to create a new customer", { status: 500 });
    }
  };
  
  