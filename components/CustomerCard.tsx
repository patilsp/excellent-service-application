"use client";

import { useState } from "react";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";

const CustomerCard = ({ customer, handleEdit, handleDelete }) => {
  const { user } = useUser();
  const pathName = usePathname();
  const router = useRouter();

  const [copied, setCopied] = useState("");

  const handleProfileClick = () => {
    console.log(customer);

    if (customer.userId === user.id) return router.push("/profile");

    router.push(`/profile/${customer.userId}`);
  };

  const handleCopy = () => {
    setCopied(customer.email);
    navigator.clipboard.writeText(customer.email);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className='prompt_card'>
      <div className='flex justify-between items-start gap-5'>
        <div
          className='flex-1 flex justify-start items-center gap-3 cursor-pointer'
          onClick={handleProfileClick}
        >
          {user && user.profileImageUrl && (
            <Image
              src={user.profileImageUrl}
              alt='user_image'
              width={40}
              height={40}
            />
          )}

          <div className='flex flex-col'>
            <h3 className='font-satoshi font-semibold text-gray-900'>
              {customer.name}
            </h3>
            <p className='font-inter text-sm text-gray-500'>
              {customer.email}
            </p>
          </div>
        </div>

        <div className='copy_btn' onClick={handleCopy}>
          <Image
            src={
              copied === customer.email
                ? "/assets/icons/tick.svg"
                : "/assets/icons/copy.svg"
            }
            alt={copied === customer.email ? "tick_icon" : "copy_icon"}
            width={12}
            height={12}
          />
        </div>
      </div>

      <p className='my-4 font-satoshi text-sm text-gray-700'>{customer.phone}</p>
      <p className='my-4 font-satoshi text-sm text-gray-700'>{customer.address}</p>
      <p className='my-4 font-satoshi text-sm text-gray-700'>{customer.status}</p>

      {user.id === customer.userId && pathName === "/profile" && (
        <div className='mt-5 flex-center gap-4 border-t border-gray-100 pt-3'>
          <p
            className='font-inter text-sm green_gradient cursor-pointer'
            onClick={handleEdit}
          >
            Edit
          </p>
          <p
            className='font-inter text-sm orange_gradient cursor-pointer'
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
};

export default CustomerCard;
