"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useAuth } from "@clerk/nextjs";

const PromptCard = ({ post, handleEdit, handleDelete, handleTagClick }) => {
  const pathName = usePathname();
  const router = useRouter();
  const { isLoaded, userId, sessionId, getToken } = useAuth();

  const [copied, setCopied] = useState("");

  const handleProfileClick = () => {
    console.log(post);

    if (post.creator._id === userId) return router.push("/UserProfile");

  };

  const handleCopy = () => {
    setCopied(post.address);
    navigator.clipboard.writeText(post.address);
    setTimeout(() => setCopied(""), 3000);
  };
  

  return (
    
      <div className='prompt_card'>
        <div className='flex items-start justify-between gap-5'>
          <div
            className='flex flex-1 cursor-pointer items-center justify-start gap-3'
            onClick={handleProfileClick}
          >
            {post.creator && post.creator.image && (
              <Image
                src={post.creator.image}
                alt='user_image'
                width={40}
                height={40}
                className="rounded-full"
              />
            )}



            <div className='flex flex-col'>
              <h3 className='font-satoshi font-semibold text-gray-900'>
                {post.creator && post.creator.username}
              </h3>
              <p className='font-inter text-sm text-gray-500'>
                {post.creator && post.creator.email}
              </p>
            </div>
          </div>

          <div className='copy_btn' onClick={handleCopy}>
            <Image
              src={
                copied === post.address
                  ? "/assets/icons/tick.svg"
                  : "/assets/icons/copy.svg"
              }
              alt={copied === post.address ? "tick_icon" : "copy_icon"}
              width={12}
              height={12}
            />
          </div>
        </div>

        <div className='mt-5 border-t border-gray-100 pt-3'>
          <h4 className='font-semibold'>Customer Information:</h4>
          <p>
            <strong>Customer Name:</strong> {post.firstname} {post.lastname}
          </p>

          <p>
            <strong>Phone Number:</strong> {post.phoneno}
          </p>
          <p>
            <strong>Email:</strong> {post.email}
          </p>
          <p>
            <strong>State:</strong> {post.state}
          </p>
          <p>
            <strong>City:</strong> {post.city}
          </p>
          <p>
            <strong>Address:</strong> {post.address}
          </p>
          <p>
            <strong>Date of Birth:</strong> {post.dateofbirth}
          </p>
         
        </div>
        <p
          className='font-inter blue_gradient cursor-pointer text-sm'
          onClick={() => handleTagClick && handleTagClick(post.tag)}
        >
          #{post.tag}
        </p>

       
        <div className='flex-center mt-5 gap-4 border-t border-gray-100 pt-3'>
          <p
            className='font-inter green_gradient cursor-pointer text-sm'
            onClick={handleEdit}
          >
            Edit
          </p>
          <p
            className='font-inter orange_gradient cursor-pointer text-sm'
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>

      </div>

  );
};


export default PromptCard;
