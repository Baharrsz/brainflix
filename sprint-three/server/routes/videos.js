const express = require("express");
const router = express.Router();
const sideVideos = require("../model/sideVideos.json");
const mainVideos = require("../model/mainVideos.json");
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
  const match = sideVideos.find(video => video.id === req.params.id);
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
    image: __dirname + "../../client/src/assets/images/Upload-video-preview.jpg"
  };

  const mainVideo = {
    id: sideVideo.id,
    title: req.body.title,
    channel: "user",
    image:
      __dirname + "../../client/src/assets/images/Upload-video-preview.jpg",
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
    let sideVideosName = __dirname + "/../model/videos.json";
    writeJSONFile(sideVideosName, sideVideos);
    mainVideos.push(mainVideo);
    let mainVideosName = __dirname + "/../model/mainVideos.json";
    writeJSONFile(mainVideosName, mainVideos);
    res.json(mainVideo);
  }
});

module.exports = router;
