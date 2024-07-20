
import Complaint from "@/models/complaint";
import { connectToDB } from "@/utils/database";

export default async function handler(req, res) {
    try {
      // Fetch the completed complaints data from your database or backend service
      const completedComplaints = await fetchCompletedComplaintsData();
  
      res.status(200).json(completedComplaints);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch completed complaints data' });
    }
  }
  
  async function fetchCompletedComplaintsData() {
    // Implement your data fetching logic here
    // For example, fetching data from a database
    return [
      // Sample data
      { id: 1, description: 'Complaint 2', status: 'completed' },
      // Add more completed complaints as needed
    ];
  }
  