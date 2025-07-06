const express = require("express");
const router = express.Router();
const Projects = require("../schema/projectSchema");

router.get("/", async (req, res) => {
  try {
    const projects = await Projects.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, projects });
  } catch (e) {
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch projects", error });
  }
});

router.post("/", async (req, res) => {
  try {
    const { title, description, techStack, liveLink, githubLink, image } =
      req.body;
    if (!title || !description || !liveLink || !githubLink) {
      return res
        .status(400)
        .json({ success: false, message: "Required fields are missing" });
    }
    const project = new Projects({
      title,
      description,
      techStack,
      liveLink,
      githubLink,
      image,
    });
    await project.save();

    res.status(201).json({
      success: true,
      message: "Project added successfully",
      project,
    });
  } catch (e) {
    res
      .status(500)
      .json({ success: false, message: "Failed to add project", error });
  }
});

module.exports = router;
