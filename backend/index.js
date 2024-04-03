const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

let addCount = 0;
let updateCount = 0;

app.use(bodyParser.json());

// API to add data
app.post("/api/add", (req, res) => {
  // Increment addCount
  addCount++;

  // Here, you can handle the data sent from the frontend
  // For demonstration, let's just log the received data
  console.log("Data received for adding:", req.body);

  // You can perform database operations or any other necessary logic here

  // Respond with success message
  res.status(200).json({ message: "Data added successfully" });
});

// API to edit/update data
app.put("/api/update", (req, res) => {
  // Increment updateCount
  updateCount++;

  // Here, you can handle the data sent from the frontend
  // For demonstration, let's just log the received data
  console.log("Data received for updating:", req.body);

  // You can perform database operations or any other necessary logic here

  // Respond with success message
  res.status(200).json({ message: "Data updated successfully" });
});

// API to get the count of add and update requests
app.get("/api/count", (req, res) => {
  res.status(200).json({ addCount, updateCount });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
