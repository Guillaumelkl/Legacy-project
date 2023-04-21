import React from 'react'
import axios from 'axios'
import { useState } from 'react'

function Deletephotobtn() {
    const [deletePhotos, setDeletePhotos] = useState('');

    async function handleDelete() {
        await axios.delete('http://localhost:8080/auth/delete')
          .then(response => {
            console.log("success")
          })
          .catch(error => {
            console.log(error)
          });      

}

  return (
    < > 
      <button onClick={handleDelete}>Deletephotobtn</button>
    </>  
  )
}

export default Deletephotobtn