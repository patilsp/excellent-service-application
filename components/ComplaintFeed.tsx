"use client";

import { useState, useEffect } from "react";
import ComplaintCard from "@/components/ComplaintCard";
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
      const response = await fetch("/api/complaint");
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
    const regex = new RegExp(searchText, "i");
    const results = allComplaints.filter(
      (item) =>
        regex.test(item.name) ||
        regex.test(item.status) 
    );
    return results;
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

  const handleTagClick = (name) => {
    setSearchText(name);

    const searchResult = filterComplaints(name);
    setSearchedResults(searchResult);
  };

  return (
    <section className="w-full px-6 py-4">
      <div className="space-between items-center md:flex ">
        <div>
          <h1 className="mb-6"> My Complaints </h1>
        </div>
        <div className="ml-auto">
          <form className="mb-6">
            <Input
              type="text"
              placeholder="Search for a complaint..."
              value={searchText}
              onChange={handleSearchChange}
              className="w-full rounded border-gray-300 shadow-md"
            />
          </form>
        </div>
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
