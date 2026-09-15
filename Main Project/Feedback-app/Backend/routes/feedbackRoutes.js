import express from "express";

import {
  addFeedback,
  getFeedback
} from "../controllers/feedbackController.js";

const router = express.Router();

router.post("/feedback", addFeedback);

router.get("/feedback", getFeedback);

export default router;