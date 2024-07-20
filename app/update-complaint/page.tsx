"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ComplaintForm from "@/components/ComplaintForm";
import toast from 'react-hot-toast';

const UpdateComplaint = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const complaintId = searchParams.get("id");

  const [complaint, setComplaint] = useState({
    name: "",
    mobile: "",
    note: "",
    id: ""
  });
  const [submitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const getComplaintDetails = async () => {
      try {
        const response = await fetch(`/api/complaint/${complaintId}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setComplaint(data);
      } catch (error) {
        console.error("Failed to fetch complaint:", error);
      }
    };

    if (complaintId) getComplaintDetails();
  }, [complaintId]);

  console.log(complaintId);

  const updateComplaint = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!complaintId) {
      alert("Missing ComplaintId!");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(`/api/complaint/${complaintId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: complaint.name,
          mobile: complaint.mobile,
          note: complaint.note,
        }),
      });

      const responseData = await response.json(); // Parse response as JSON
      if (response.ok) {
        toast.success(responseData.message || "Complaint has been updated! 🔥"); // Use response message
        router.push("/complaints");
      } else {
        throw new Error(responseData.message || "Failed to update complaint"); // Include error message from API
      }
    } catch (error) {
      toast.error(`Failed to update complaint! ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ComplaintForm
      type="Edit"
      complaint={complaint}
      setComplaint={setComplaint}
      submitting={submitting}
      handleSubmit={updateComplaint}
    />
  );
};

export default UpdateComplaint;
