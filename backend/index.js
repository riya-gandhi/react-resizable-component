const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs").promises;

const app = express();
const PORT = process.env.PORT || 5000;
const DB_FILE_PATH = "./db.json";

app.use(bodyParser.json());

// Read counts from the JSON file
const readCountsFromDB = async () => {
  try {
    const data = await fs.readFile(DB_FILE_PATH);
    return JSON.parse(data).counts;
  } catch (error) {
    console.error("Error reading counts from DB:", error);
    return [0, 0, 0]; // Return default counts if file read fails
  }
};

// Write counts to the JSON file
const writeCountsToDB = async (counts) => {
  try {
    await fs.writeFile(DB_FILE_PATH, JSON.stringify({ counts }));
    console.log("Counts updated in DB:", counts);
  } catch (error) {
    console.error("Error writing counts to DB:", error);
  }
};

// API to add data
app.post("/api/add", async (req, res) => {
  try {
    const counts = await readCountsFromDB();
    counts[req.body.index]++;
    await writeCountsToDB(counts);
    res.status(200).json({ message: "Data added successfully" });
  } catch (error) {
    console.error("Error adding data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// API to edit/update data
app.put("/api/update", async (req, res) => {
  try {
    const counts = await readCountsFromDB();
    counts[req.body.index]++;
    await writeCountsToDB(counts);
    res.status(200).json({ message: "Data updated successfully" });
  } catch (error) {
    console.error("Error updating data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// API to get the count of add and update requests
app.get("/api/count", async (req, res) => {
  try {
    const counts = await readCountsFromDB();
    res
      .status(200)
      .json({
        addCount: counts[0],
        updateCount: counts[1],
        thirdComponentCount: counts[2],
      });
  } catch (error) {
    console.error("Error fetching counts:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
