"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import CustomerForm from "@/components/CustomerForm";
import toast from 'react-hot-toast';

const UpdateCustomer = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const customerId = searchParams.get("id"); 

  const [customer, setPosts] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [submitting, setIsSubmitting] = useState(false);

  // console.log(customerId);

  useEffect(() => {
    const getCustomerDetails = async () => {
      try {
        const response = await fetch(`/api/customer`); 
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch customers:", error);
      }
    };

    if (customerId) getCustomerDetails();
  }, [customerId]);

  
// console.log(customerId);

  const updateCustomer = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!customerId) { // Corrected to customerId
      alert("Missing CustomerId!");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(`/api/customer/${customerId}`, { 
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: customer.name,
          email: customer.email,
          phone: customer.phone,
          address: customer.address,
          dateofbirth: customer.dateofbirth,
        }),
      });

      if (response.ok) {
        toast.success("Customer has been updated! 🔥");
        router.push("/customers"); 
      } else {
        throw new Error("Failed to update customer");
      }
    } catch (error) {
      // console.error("Error updating customer:", error);
      toast.error("Failed to update customer!", error);

    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <CustomerForm
      type="Edit"
      post={customer}
      setPost={setPosts}
      submitting={submitting}
      handleSubmit={updateCustomer}
    />
  );
};

export default UpdateCustomer;
