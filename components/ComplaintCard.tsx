"use client";

import { useState } from "react";
import { useSession } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/registry/new-york/ui/card";
import { Button } from "@/registry/new-york/ui/button";
import { format } from "date-fns";
import { motion } from "framer-motion";

const ComplaintCard = ({ complaint, handleEdit, handleDelete, handleTagClick }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  const [copied, setCopied] = useState("");

  const handleProfileClick = () => {
    if (complaint.creator?._id === session?.user.id) {
      return router.push("/userprofile");
    }
    router.push(`/userprofile/${complaint.creator?._id}?name=${complaint.creator?.username}`);
  };

  const handleCopy = () => {
    setCopied(complaint.description);
    navigator.clipboard.writeText(complaint.description);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <Card className="grid max-w-sm mx-auto mb-6 p-4 bg-white shadow-lg rounded-lg">
      <CardHeader className="flex items-start justify-between gap-4">
        <div
          className="flex justify-between cursor-pointer items-center gap-3"
          onClick={handleProfileClick}
        >
          <Image
            src="/avatars/01.png"
            alt='user_image'
            width={40}
            height={40}
            className='rounded-full object-contain'
          />
         
        <div className='relative'>
          <Button
            variant="outline"
            onClick={handleCopy}
            className="p-1"
          >
            <Image
              src={
                copied === complaint.description
                  ? "/icons/tick.svg"
                  : "/icons/copy.svg"
              }
              alt={copied === complaint.description ? "tick_icon" : "copy_icon"}
              width={16}
              height={16}
            />
          </Button>
          {copied && (
            <span className="absolute top-0 right-0 bg-gray-800 text-white text-xs p-1 rounded">
              Copied!
            </span>
          )}
        </div>
        </div>

      </CardHeader>
      
      <CardContent className="my-4">
        <p className='text-sm text-gray-700'>{complaint.name}</p>
        <p className='text-sm text-gray-700'>{complaint.email}</p>
        <p className='text-sm text-gray-700'>{complaint.mobile}</p>
        <p className='text-sm text-gray-700'>{complaint.note}</p>
      </CardContent>
      
      {session?.user.id === complaint.creator?._id && pathName === "/profile" && (
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
