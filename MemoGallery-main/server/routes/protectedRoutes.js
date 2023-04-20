const express = require("express");
const router = express.Router();
const authorize = require("../authorize")

const {
  postPhotos,
  like,
  getPhotos,
  deletePhoto,
  deleteAll,
} = require("../controllers/photosControllers");

router.post("/postPhotos", authorize, postPhotos);
router.get("/getPhotos", authorize, getPhotos);
router.put("/likes/:id",authorize, like);
router.delete("/delete/:id", deletePhoto)
router.delete("/delete",  deleteAll)

module.exports = router;
