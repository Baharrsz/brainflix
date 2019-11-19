const express = require("express");
const router = express.Router();
const sideVideos = require("../model/sideVideos.json");
const sideVideosName = __dirname + "/../model/sideVideos.json";
const mainVideos = require("../model/mainVideos.json");
const mainVideosName = __dirname + "/../model/mainVideos.json";
const uuid = require("uuid/v4");
const fs = require("fs");

function writeJSONFile(filename, content) {
  fs.writeFile(filename, JSON.stringify(content), err => {
    if (err) console.log(err);
  });
  console.log(`changes saved to file ${filename}....`);
}

router.get("/", (req, res) => {
  res.json(sideVideos);
});

router.get("/:id", (req, res) => {
  const match = mainVideos.find(video => video.id === req.params.id);
  if (match) {
    res.json(match);
  } else {
    res
      .status(400)
      .json({ errorMessage: `Video with ID:${req.params.id} not found` });
  }
});

router.post("/", (req, res) => {
  const sideVideo = {
    id: uuid(),
    title: req.body.title,
    channel: "user",
    image: req.body.image
  };

  const mainVideo = {
    ...sideVideo,
    description: req.body.description,
    views: "0",
    likes: "0",
    timestamp: Date.now(),
    comments: []
  };
  if (!mainVideo.title || !mainVideo.description) {
    return res.status(400).json({
      errorMessage: "Please provide title and description for the video"
    });
  } else {
    sideVideos.push(sideVideo);
    writeJSONFile(sideVideosName, sideVideos);
    mainVideos.push(mainVideo);
    writeJSONFile(mainVideosName, mainVideos);
    res.json(mainVideo);
  }
});

router.post("/:id/comments", (req, res) => {
  const match = mainVideos.find(video => video.id === req.params.id);
  const matchIndex = mainVideos.indexOf(match);
  if (!match)
    res
      .status(400)
      .json({ errorMessage: `No videos with the id ${req.params.id}` });
  else if (!req.body.name || !req.body.comment)
    res.status(400).json({ errorMessage: "Please provide name and comment." });
  else {
    let newComment = {
      name: req.body.name,
      comment: req.body.comment,
      id: req.params.id,
      timestamp: Date.now()
    };
    match.comments.push(newComment);
    mainVideos.splice(matchIndex, 1, match);
    writeJSONFile(mainVideosName, mainVideos);
    res.json(newComment);
  }
});

module.exports = router;
