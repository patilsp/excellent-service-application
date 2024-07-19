"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import CustomerForm from "@/components/CustomerForm";

const UpdateCustomer = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const customerId = searchParams.get("id"); 

  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [submitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const getCustomerDetails = async () => {
      const response = await fetch(`/api/Customer/${customerId}`);
      const data = await response.json();

      setPost({
        id: data.id,
        name: data.name,
        email:data.email,
        phone:data.phone,
        address:data.address,
      });
    };

    if (customerId) getCustomerDetails();
  }, [customerId]);

  

  const updateCustomer = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!customerId) { // Corrected to customerId
      alert("Missing CustomerId!");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(`/api/customer/${customerId}`, { // Use customerId here
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: customer.name,
          email: customer.email,
          phone: customer.phone,
          address: customer.address,
        }),
      });

      if (response.ok) {
        router.push("/"); // Adjust the path as necessary
      } else {
        throw new Error("Failed to update customer");
      }
    } catch (error) {
      console.error("Error updating customer:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <CustomerForm
      type="Edit"
      post={customer}
      setPost={setCustomer}
      submitting={submitting}
      handleSubmit={updateCustomer}
    />
  );
};

export default UpdateCustomer;
