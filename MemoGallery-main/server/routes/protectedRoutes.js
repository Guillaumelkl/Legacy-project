const express = require("express");
const router = express.Router();
const authorize = require("../authorize")

const {
  postPhotos,
  like,
  getPhotos,
} = require("../controllers/photosControllers");

router.post("/postPhotos",authorize, postPhotos);
router.get("/getPhotos",authorize, getPhotos);
router.put("/likes/:id",authorize, like);

module.exports = router;
