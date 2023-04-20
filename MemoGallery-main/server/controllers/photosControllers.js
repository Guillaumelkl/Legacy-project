const photosModel = require("../models/photosModel");

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

const getPhotos = async(req,res) => {
  try{
    const photos = await photosModel.find();
    res.send(photos);
  }catch(error){
    res.status(500).send("Unable to retrieve photos...");
  }

}

const like = async(req,res)=>{
  let id = req.params.id
  let photo = await photosModel.findById(id)
  if(!photo){
      res.send({msg:"photo not found"})
  }
      photo.likesNum = photo.likesNum+1
      console.log(photo.likesNum)
      let updatedLikes = await photo.save()
      res.send(updatedLikes)
}

const deletePhoto = async(req,res)=>{
  try { const photoId = req.params.id
     const toDelete = await photosModel.deleteOne({photoId})
  res.send({msg:'photoDeleted', toDelete})
  console.log(toDelete)
    
  } catch (error) {
    res.sen(error)
    console.log(error)
  }
 

}

const deletedAll = async (req, res) => {
  try {const deleteAll = await photosModel.deleteMany();
    res.send({msg:'deleted all', deleteAll});
    
  } catch (error) {
    res.send({msg:"all are deleted"})
  }
   
};

module.exports = {
  postPhotos,
  getPhotos,
  like,
  deletePhoto,
  deletedAll
};