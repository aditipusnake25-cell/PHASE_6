import Feedback from "../models/feedbackModel.js";

const addFeedback = async (req, res) => {
  try {
    const newFeedback = new Feedback(req.body);

    await newFeedback.save();

    res.status(201).json({
      message: "Feedback added successfully",
      feedback: newFeedback
    });

  } catch (error) {
    console.error("Error adding feedback:", error);

    res.status(500).json({
      message: error.message
    });
  }
};


const getFeedback = async (req, res) => {
  try {
    const feedbacks = await Feedback.find();

    res.status(200).json(feedbacks);

  } catch (error) {
    console.error("Error getting feedback:", error);

    res.status(500).json({
      message: error.message
    });
  }
};


export { addFeedback, getFeedback };