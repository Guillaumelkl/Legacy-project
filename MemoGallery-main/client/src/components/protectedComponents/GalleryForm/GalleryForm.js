import { useEffect, useRef, useState } from "react";
import "./GalleryForm.css";
import axios from "axios";
function GalleryForm() {
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState();
  /* using useRef hook to clean the input after adding the photo */
  const inputRef = useRef(null)

  const uploadImage = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  async function addPhoto(e) {
    e.preventDefault();
    let newPhoto = {
      localPhoto: file,
      photoUrl: image,
      description: description,
    };
    
    const token = localStorage.getItem("token");
    await axios
      .post("http://localhost:8080/auth/postPhotos", newPhoto,{
        headers:{
            'Authorization': `Bearer ${token}`
        }
    })
      .then((res) => alert(res.data));
  }

  const clearInput = ()=>{
    inputRef.current.value = ""
  }

    return ( 
        <div className="main"> 
            <form onSubmit={addPhoto}>
                <div className="imageSection">
                    <label>Insert Image</label>
                    <input type="file" accept="images/*" onChange={uploadImage}/>
                    <img src={file} style={{width:100,height:100}}/>
                    <input type="text" placeholder="you can insert image url" value={image} onChange={(e)=>setImage(e.target.value)} ref={inputRef}/>       
                </div>        
                <br/>
                <label>What is your memory: </label>
                <textarea type="text" value={description} onChange={(e)=>setDescription(e.target.value)} ref={inputRef}/>
                <br/>
                <button type="submit" onClick={clearInput}>Add to Gallery</button>
            </form>
        </div>
     );
}

export default GalleryForm;