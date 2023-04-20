const express = require("express");
const router = express.Router();
const authorize = require("../authorize")

const {
  postPhotos,
  like,
  getPhotos,
  deletePhoto,
  deletedAll
} = require("../controllers/photosControllers");

router.post("/postPhotos",authorize, postPhotos);
router.get("/getPhotos",authorize, getPhotos);
router.put("/likes/:id",authorize, like);
router.delete("/delete/:id",authorize, deletePhoto);
router.delete("/delete",authorize, deletedAll);

module.exports = router;
