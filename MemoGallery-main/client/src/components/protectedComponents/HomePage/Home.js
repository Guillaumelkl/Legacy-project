import "./cards.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Deletephotobtn from "./Deletephotobtn";
import { deletePhoto } from "../../../../../server/controllers/photosControllers";

function HomePage() {
  const [photos, setPhotos] = useState([]);
 
  async function getAllPhotos() {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    console.log(token);
    const response = await axios.get("http://localhost:8080/auth/getPhotos", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const eachPhotoLike = response.data.map((photo) => {
      return { ...photo, likes: 0, photoLiked: false };
    });
    setPhotos(eachPhotoLike);
  }

  async function likeButton(id) {
    let response = await axios.put(`http://localhost:8080/auth/likes/${id}`);
    const updatedPhotosWithLikes = photos.map((photo) => {
      if (photo._id === id) {
        return { ...photo, likes: response.data.likesNum, photoLiked: true };
      } else {
        return photo;
      }

    });
    setPhotos(updatedPhotosWithLikes);
  
}




  useEffect(() => {
    getAllPhotos();
  }, []);
  return (
    <>
      <div className='card-wrapper'>
        {photos.map((photo) => {
          return (
            <div className='card' key={photo._id}>
              <div>
                {photo.photoUrl && <img src={photo.photoUrl} alt='photo' />}
              </div>
              <p>{photo.description}</p>
              <button
                className='likeButton'
                onClick={() => likeButton(photo._id)}
              >
                like{photo.likes}
              </button>
              <input type={photo._id} />            
            </div>
          );
        })}
      </div>
      <div>
      <button onClick={handleDelete}>Delete All</button>
      </div>
    </>
  );
}

export default HomePage;
