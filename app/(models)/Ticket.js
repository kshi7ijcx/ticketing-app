import mongoose from "mongoose";
import { Trykker } from "next/font/google";

const schema = mongoose.Schema(
  {
    title: String,
    description: String,
    category: String,
    priority: Number,
    progress: Number,
    status: String,
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

const model = mongoose.models.Ticket || mongoose.model("Ticket", schema);
export default model;