"use client";

import { useState } from "react";
import { useAuth, useUser } from "@clerk/nextjs"; 
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/registry/new-york/ui/card";
import { Button } from "@/registry/new-york/ui/button";
import { format } from "date-fns";
import { motion } from "framer-motion";

const ComplaintCard = ({ complaint, handleEdit, handleDelete, handleTagClick }) => {
 
  
  const pathName = usePathname();
  const router = useRouter();

  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { isSignedIn, user } = useUser();

  const userName = user?.fullName || "User Name";
  const userProfileImage = user?.profileImageUrl || "/images/avatar.png";
  const userMobile = user?.phone || "";


  const [copied, setCopied] = useState("");

  const handleComplaintClick = () => {
    console.log('aaa');

    if (complaint.userId === sessionId) return router.push("/profile");

    router.push(`/profile/${complaint.userId}`);
  };

  const handleCopy = () => {
    setCopied(complaint.name);
    navigator.clipboard.writeText(complaint.name);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <Card className="mx-auto mb-6 grid w-full cursor-pointer rounded-lg bg-gray-50 p-4 shadow-lg" onClick={handleComplaintClick}>
      <CardHeader className="flex w-full justify-between gap-4">
        <div
          className="flex cursor-pointer items-center justify-between gap-3"
         
        >
        <p className='text-xl font-bold text-gray-800'>{complaint.name}</p>
        <div className='relative'>
          <Button
            variant="outline"
            onClick={handleCopy}
            className="p-1 px-2"
          >
            <Image
              src={
                copied === complaint.name
                  ? "/icons/tick.svg"
                  : "/icons/copy.svg"
              }
              alt={copied === complaint.name ? "tick_icon" : "copy_icon"}
              width={16}
              height={16}
            />
          </Button>
          {copied && (
            <span className="absolute right-0 top-0 rounded bg-gray-800 p-1 text-xs text-white">
              Copied!
            </span>
          )}
        </div>
        </div>

      </CardHeader>
      
      <CardContent className="my-4">
        
        <p className='text-sm text-gray-700'>{complaint.address}</p>
        <p className='text-sm text-gray-700'>{complaint.mobile}</p>
        <p className='text-sm text-gray-700'>{complaint.model}</p>
      </CardContent>
      
      {userId === complaint.userId && (
        <CardFooter className='flex gap-4'>
          <Button
            variant="success"
            onClick={handleEdit}
          >
            Edit
          </Button>
          <Button
            variant="danger"
            onClick={handleDelete}
          >
            Delete
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default ComplaintCard;
