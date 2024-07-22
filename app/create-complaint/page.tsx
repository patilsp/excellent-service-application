"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import ComplaintForm from "@/components/ComplaintForm"; 
import { useAuth, useUser } from "@clerk/nextjs";

const CreateComplaint = () => {
  const router = useRouter();
  const { isLoaded, userId } = useAuth();
  const { isSignedIn } = useUser();

  const [submitting, setIsSubmitting] = useState(false);
  const [complaint, setComplaint] = useState({
    userId: "",
    productType: "product-1",    
    complaintType: "Installation", 
    mobile: "",
    visitDate: "",
    status: "Active",
    address: "", 
    name: "",
  });

  useEffect(() => {
    if (isLoaded && isSignedIn && userId) {
      setComplaint((prevPost) => ({ ...prevPost, userId }));
    }
  }, [isLoaded, isSignedIn, userId]);

  const createComplaint = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/complaint/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: complaint.userId,
          productType: complaint.productType,
          complaintType: complaint.complaintType,
          address: complaint.address,
          mobile: complaint.mobile,
          visitDate: complaint.visitDate,
          status: complaint.status,
          name: complaint.name,
        }),
      });

      if (response.ok) {
        toast.success("Complaint has been created! 🔥");
        router.push("/complaints");
      } else {
        const errorText = await response.text();
        toast.error(`Error: ${errorText}`);
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ComplaintForm
      type='Create'
      complaint={complaint}
      setComplaint={setComplaint}
      submitting={submitting}
      handleSubmit={createComplaint}
    />
  );
};

export default CreateComplaint;

