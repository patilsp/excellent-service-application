"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ComplaintCard from "@/components/ComplaintCard"; 
import { useAuth, useUser,useSession } from "@clerk/nextjs"; 

const MyComplaints = () => {
  const router = useRouter();
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { isSignedIn, user } = useUser();

  const userName = user?.fullName || "User Name";  

  console.log(sessionId);

  const [myComplaints, setMyComplaints] = useState([]);

  useEffect(() => {
    const fetchComplaints = async () => {
      if (userId) {
        const response = await fetch(`/api/complaint/${userId}/complaints`);
        const data = await response.json();

        setMyComplaints(data);
      }
    };

    fetchComplaints();
  }, [userId]);

  const handleEdit = (complaint) => {
    router.push(`/update-complaint?id=${complaint.id}`);
  };

  const handleDelete = async (complaint) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this complaint?"
    );

    if (hasConfirmed) {
      try {
        await fetch(`/api/complaint/${complaint.id.toString()}`, {
          method: "DELETE",
        });

        const filteredComplaints = myComplaints.filter(
          (item) => item.id !== complaint.id
        );

        setMyComplaints(filteredComplaints);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className='profile'>
      <h1 className='text-2xl font-bold mb-4'>My Complaints</h1>
      <p className='mb-8'>
        Welcome to your personalized complaints page. Manage your complaints here, update or delete them as needed.
      </p>

      <div className='space-y-4'>
        {myComplaints.map((complaint) => (
          <ComplaintCard
            key={complaint._id}
            complaint={complaint}
            handleEdit={() => handleEdit(complaint)}
            handleDelete={() => handleDelete(complaint)}
          />
        ))}
      </div>
    </div>
  );
};

export default MyComplaints;
