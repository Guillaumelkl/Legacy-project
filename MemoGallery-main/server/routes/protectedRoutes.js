const express = require("express");
const router = express.Router();
const authorize = require("../authorize")

const {
  postPhotos,
  like,
  getPhotos,
  deleteAll,
  deletePhoto
} = require("../controllers/photosControllers");

router.post("/postPhotos", authorize, postPhotos);
router.get("/getPhotos", getPhotos);
router.put("/likes/:id",authorize, like);
router.delete("/deleteAll/", deleteAll)
router.delete("/delete/:id", deletePhoto)

module.exports = router;
