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
  if (photo.likesNum / 2 == 0) {
    photo.likesNum = photo.likesNum + 1;
  } else {
    photo.likesNum = photo.likesNum -1
  }
  console.log(photo.likesNum);
  let updatedLikes = await photo.save();
  res.send(updatedLikes);
};

// add the favorite photo in the backend and display it with a new router to display it on the favorite page

const favoritePhoto = async (req, res) => {
  try {
    const favoritePhoto = [];
    let likesNum = req.params;
    const photos = await photosModel.find({ likesNum: { $gt: 0 } });
    favoritePhoto.push(photos);
    console.log(favoritePhoto);
    res.send(photos);
  } catch (error) {
    res.status(500).send("Unable to retrieve photos...");
  }
};

// add the delete button to remove a specific button 

const deletePhoto = async (req, res) => {
  try {
    let {id} = req.params;
    const toDelete = await photosModel.findByIdAndRemove(id);
    res.status(204).send({ msg: "photoDeleted",toDelete});
    console.log("toDelete");
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
};

//delete all to be able to delete all photos directly

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
  favoritePhoto
};
