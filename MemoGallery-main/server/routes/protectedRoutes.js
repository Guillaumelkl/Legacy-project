const express = require("express");
const router = express.Router();
const authorize = require("../authorize")

const {
  postPhotos,
  like,
  getPhotos,
  deleteAll,
  deletePhoto,
  favoritePhoto
} = require("../controllers/photosControllers");

router.post("/postPhotos", authorize, postPhotos);
router.get("/getPhotos",authorize, getPhotos);
router.put("/likes/:id", like);
router.delete("/deleteAll",authorize, deleteAll)
router.delete("/delete/:id", deletePhoto)
router.get("/favorite", favoritePhoto)

module.exports = router;
