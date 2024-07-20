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
  });

  const createComplaint = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/complaint/new", {
        method: "POST",
        body: JSON.stringify({
          name: complaint.name,
          mobile: complaint.mobile,
          city: complaint.city,
          note: complaint.note,
        }),
      });

      if (response.ok) {
        router.push("/complaints");
        toast.success("Complaint has been registered successfully! 🔥");
      } else {
        toast.error("Failed to register complaint.");
      }
    } catch (error) {
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
