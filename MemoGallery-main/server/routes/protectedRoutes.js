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
router.get("/getPhotos",authorize, getPhotos);
router.put("/likes/:id", like);
router.delete("/deleteAll",authorize, deleteAll)
router.delete("/delete/:id", deletePhoto)

module.exports = router;
