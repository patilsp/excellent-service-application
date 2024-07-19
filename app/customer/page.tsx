"use client";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import CustomerCard from "@/components/CustomerCard";

const HomePage = () => {
  const { user } = useUser();
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch(`/api/customers/${customer.id}`);
        const data = await response.json();
        console.log("Fetched customers:", data); // Debugging
        setCustomers(data);
      } catch (error) {
        console.error("Failed to fetch customers:", error);
      }
    };

    fetchCustomers();
  }, []);


  const handleDelete = async (customer) => {
    const hasConfirmed = confirm("Are you sure you want to delete this customer?");
    
    if (hasConfirmed) {
      try {
        await fetch(`/api/customers/${customer._id}`, {
          method: "DELETE",
        });

        const filteredCustomers = customers.filter((item) => item._id !== customer._id);
        setCustomers(filteredCustomers);
      } catch (error) {
        console.error("Failed to delete customer:", error);
      }
    }
  };


  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">Customers</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {customers.map((customer) => (
          <CustomerCard
            key={customer._id}
            customer={customer}
            handleEdit={() => console.log("Edit customer:", customer)}
            handleDelete={() => handleDelete(customer)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
