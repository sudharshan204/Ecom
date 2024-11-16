import express from "express";
import { Women } from "../model/Women.js";

const routewomen = express.Router();

routewomen.get("/", async (req, res) => {
  try {
    const data = await Women.find(); // Fetch all Women data from the database
    res.status(200).json(data); // Return the fetched data with a 200 status code
  } catch (error) {
    res.status(500).json({ message: "Error fetching data", error: error.message }); // Handle errors
  }
});

// Add new Women data (supports both single object and array of objects)
routewomen.post("/", async (req, res) => {
  try {
    const data = req.body; // Expecting an array or a single object

    // Check if data is an array
    if (Array.isArray(data)) {
      // Insert multiple records
      const new_data = await Women.insertMany(data);
      res.status(201).json(new_data); // Return the created objects and appropriate status
    } else {
      // Insert a single record
      const new_data = new Women(data);
      await new_data.save();
      res.status(201).json(new_data); // Return the created object and appropriate status
    }
  } catch (error) {
    res.status(400).json({ message: "Error saving data", error: error.message });
  }
});

export default routewomen;
