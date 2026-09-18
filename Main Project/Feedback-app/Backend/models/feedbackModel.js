import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    trim: true
  },

  comments: {
    type: String,
    required: true,
    minlength: 5,
    trim: true
  },

  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  }
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

export default Feedback;