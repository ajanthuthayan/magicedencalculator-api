import express from "express";
import cors from "cors";
import details from "./api/details.js";

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5050;

app.use("/details", details);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
