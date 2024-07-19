"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import ComplaintForm from "@/components/ComplaintForm";

const UpdateComplaint = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const ComplaintId = searchParams.get("id");

  const [complaint, setComplaint] = useState({ Complaint: "", name: "", mobile: "", note: ""});
  const [submitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const getComplaintDetails = async () => {
      const response = await fetch(`/api/Complaint/${ComplaintId}`);
      const data = await response.json();

      setPost({
        Complaint: data.Complaint,
        name: data.name,
        mobile: data.mobile
      });
    };

    if (ComplaintId) getComplaintDetails();
  }, [ComplaintId]);

  const updateComplaint = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!ComplaintId) return alert("Missing ComplaintId!");

    try {
      const response = await fetch(`/api/Complaint/${ComplaintId}`, {
        method: "PATCH",
        body: JSON.stringify({
          name: post.name,
          mobile: post.mobile,
          note:post.note,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ComplaintForm
      type='Edit'
      post={post}
      setComplaint={setComplaint}
      submitting={submitting}
      handleSubmit={updateComplaint}
    />
  );
};

export default UpdateComplaint;
