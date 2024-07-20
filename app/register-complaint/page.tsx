"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import ComplaintForm from "@/components/ComplaintForm";
import { useAuth, useUser } from "@clerk/nextjs";

const RegisterComplaint = () => {
  const router = useRouter();
  const { isLoaded, userId, getToken } = useAuth();
  const { isSignedIn, user } = useUser();

  const [submitting, setIsSubmitting] = useState(false);
  const [complaint, setComplaint] = useState({
    name: "",
    mobile: "",
    city: "",
    note: "",
    complaintType: "",
    model:"",
  });

  const createComplaint = async (data) => {
    if (submitting) return; // Prevent multiple submissions
  
    setIsSubmitting(true);
  
    try {
      const response = await fetch("/api/complaint/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        toast.success("Complaint has been registered successfully! 🔥");
        setComplaint({
          name: "",
          mobile: "",
          note: "",
          model: "",
          complaintType: "",
        });
        setTimeout(() => setOpen(false), 2000); // Close modal after 2 seconds
      } else {
        const errorData = await response.json(); // Get error details from response
        toast.error(`Failed to register complaint: ${errorData.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("An error occurred while submitting the complaint:", error);
      toast.error("An error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
    

  return (
    <ComplaintForm
      type="Create"
      complaint={complaint}
      setComplaint={setComplaint}
      submitting={submitting}
      handleSubmit={createComplaint}
    />
  );
};

export default RegisterComplaint;
