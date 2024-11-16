import express from "express";
import { Men } from "../model/Men.js";

const route = express.Router();

// Get all records
route.get("/", async (req, res) => {
  try {
    const data = await Men.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching data", error: error.message });
  }
});

// Add new record(s)
route.post("/", async (req, res) => {
  try {
    const data = req.body; // Expecting an array or a single object
    if (Array.isArray(data)) {
      const new_data = await Men.insertMany(data);
      res.status(201).json(new_data);
    } else {
      const new_data = new Men(data);
      await new_data.save();
      res.status(201).json(new_data);
    }
  } catch (error) {
    res.status(400).json({ message: "Error saving data", error: error.message });
  }
});

// Delete a record by ID
route.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedData = await Men.findByIdAndDelete(id);
    if (!deletedData) {
      return res.status(404).json({ message: "Record not found" });
    }
    res.status(200).json({ message: "Record deleted successfully", deletedData });
  } catch (error) {
    res.status(500).json({ message: "Error deleting data", error: error.message });
  }
});

export default route;
