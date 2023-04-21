const photosModel = require("../models/photosModel");
const mongoose = require('mongoose');

const postPhotos = async (req, res) => {
  const { photoUrl, description } = req.body;

  try {
    await photosModel.create({
      photoUrl,
      description,
    });
    res.send("Photo saved successfully!");
  } catch (error) {
    res.status(500).send("an error occurred...");
    throw error;
  }
};

const getPhotos = async (req, res) => {
  try {
    const photos = await photosModel.find();
    res.send(photos);
  } catch (error) {
    res.status(500).send("Unable to retrieve photos...");
  }
};

const like = async (req, res) => {
  let id = req.params.id;
  let photo = await photosModel.findById(id);
  if (!photo) {
    res.send({ msg: "photo not found" });
  }
  photo.likesNum = photo.likesNum + 1;
  console.log(photo.likesNum);
  let updatedLikes = await photo.save();
  res.send(updatedLikes);
};

const deletePhoto = async (req, res) => {
  try {
    let id = req.params.id;
    const toDelete = await photosModel.deleteOne({_id: mongoose.Types.ObjectId(id)});
    res.status(200).send({ msg: "photoDeleted", toDelete });
    console.log("toDelete");
  } catch (error) {
    res.send(error);
    console.log(error);
  }
};

const deleteAll = async (req, res) => {
  try {
    const deleteP = await photosModel.deleteMany()
    res.send({msg: "deleted!", deleteP})
  } catch (error) {
    res.send(error)
  }
};

module.exports = {
  postPhotos,
  getPhotos,
  like,
  deletePhoto,
  deleteAll,
};
