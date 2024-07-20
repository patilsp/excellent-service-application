"use client";

import { useState, useEffect } from "react";
import ComplaintCard from "@/components/ComplaintCard"; 
import { motion } from "framer-motion";

const ComplaintCardList = ({ data, handleTagClick }) => {
  return (
    <div className='mt-12 complaint_layout'>
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
    <section className='feed w-full py-2'>
      <form className='relative w-full flex-center '>
        <input
          type='text'
          placeholder='Search for a complaint ID, customer name, or status'
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input peer '
        />
      </form>

      {/* All Complaints */}
      {searchText ? (
        <ComplaintCardList
          data={searchedResults}
          handleTagClick={handleTagClick}
        />
      ) : (
        <ComplaintCardList data={allComplaints} handleTagClick={handleTagClick} />
      )}
    </section>
  );
};

export default ComplaintFeed;
