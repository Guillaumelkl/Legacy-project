import axios from "axios";
import { useEffect, useState } from "react";

function Favorites() {

  const [favoritePhoto, setFavoritePhoto] = useState([]);
  try {
    async function displayFavorites() {
      
      const response = await axios.get(
        "http://localhost:8080/auth/favorite");
      setFavoritePhoto(response.data);
    }
 
    useEffect(() => {
        displayFavorites();
      }, []);
  return (
    <>
      <div className="card-wrapper">
        {favoritePhoto.map((photo) => {
          return (
            
            <div className="card" key={photo._id}>
              
              <div type="file" name="file">
                {photo.photoUrl && <img src={photo.photoUrl} alt="" />}
              </div>
              <p>{photo.description}</p>
  
              <input type={photo._id} />
              
            </div>
            
          );
        })}
      </div>
    </>
  );
} catch (error) {
    console.log(error);
  }
}

export default Favorites;