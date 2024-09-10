import express from "express";
import { getUserLists, addNewList } from "../controllers/List.js";
import { authenticateUser } from "../middleware/authMiddleware.js";


const router = express.Router();

router.use(authenticateUser);

//routes for adding and fetching lists
router.get("/lists", getUserLists);
router.post("/lists", addNewList);

export default router;
