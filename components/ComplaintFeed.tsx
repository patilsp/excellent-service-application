"use client";

import { useState, useEffect } from "react";
import ComplaintCard from "@/components/ComplaintCard"; 
import { motion } from "framer-motion";
import { Input } from "@/registry/new-york/ui/input";

const ComplaintCardList = ({ data, handleTagClick }) => {
  return (
    <div className='complaint_layout mt-12'>
      {data.map((complaint) => (
        <ComplaintCard
          key={complaint._id}
          complaint={complaint}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const ComplaintFeed = () => {
  const [allComplaints, setAllComplaints] = useState([]);

  // Search states
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  const fetchComplaints = async () => {
    try {
      const response = await fetch("/api/complaint"); // Adjust API endpoint as needed
      if (!response.ok) {
        throw new Error("Failed to fetch complaints");
      }
      const data = await response.json();
      setAllComplaints(data);
    } catch (error) {
      console.error("Error fetching complaints:", error);
    }
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  const filterComplaints = (searchText) => {
    const regex = new RegExp(searchText, "i"); // 'i' flag for case-insensitive search
    return allComplaints.filter(
      (item) =>
        regex.test(item.complaintText) || // Adjust field names as per your data
        regex.test(item.complaintId) || 
        regex.test(item.customerName) ||
        regex.test(item.status) // Example fields
    );
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterComplaints(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const handleTagClick = (tagName) => {
    setSearchText(tagName);

    const searchResult = filterComplaints(tagName);
    setSearchedResults(searchResult);
  };

  return (
    <section className="w-full px-6 py-4">

      <div className="flex w-full p-2">
        {/* <h1 className=""> My Complaints </h1> */}
        <form className="mb-6 flex items-center justify-center">
          <Input
            type="text"
            placeholder="Search for a complaint ID, customer name, or status"
            value={searchText}
            onChange={handleSearchChange}
            className="w-full max-w-md rounded-lg border-gray-300 shadow-md"
          />
        </form>
    </div>

    {/* All Complaints */}
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {searchText ? (
        searchedResults.map(complaint => (
          <ComplaintCard key={complaint._id} complaint={complaint} handleTagClick={handleTagClick} />
        ))
      ) : (
        allComplaints.map(complaint => (
          <ComplaintCard key={complaint._id} complaint={complaint} handleTagClick={handleTagClick} />
        ))
      )}
    </div>
  </section>
  );
};

export default ComplaintFeed;
