const mongoose = require("mongoose");

const projectSchema = {
  title: String,
  description: String,
  techStack: [String],
  liveLink: String, // link to the deployed app
  githubLink: String, // GitHub repo
  image: String, // URL to thumbnail or screenshot
  createdAt: {
    type: Date,
    default: Date.now,
  },
};

module.exports = mongoose.model("Projects", projectSchema);
