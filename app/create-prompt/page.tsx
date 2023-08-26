"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Form from "@/components/Form";
import { useAuth } from "@clerk/nextjs";

const CreatePrompt = () => {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const router = useRouter();

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ firstname: "", lastname: "", email: "", address:"", phoneno: "", state:"", city: "", pincode: "", dateofbirth:"", tag: "", });

  const createPrompt = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          tag: post.tag,
          firstname: post.firstname, 
          lastname: post.lastname, 
          email: post.email, 
          phoneno: post.phoneno, 
          state:post.state,
          city: post.city,
          dateofbirth:post.dateofbirth,
          address:post.address,

        }),
      });

      if (response.ok) {
        toast.success("Customer has been created! 🔥");
        router.push("/");
      }
    } catch (error) {
        console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type='Create'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  );
};

export default CreatePrompt;
