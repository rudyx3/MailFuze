import express from "express";
import cors from "cors";
import userListRoutes from "./routes/userListRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/user", userListRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Hello from MailFuze",
  });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
