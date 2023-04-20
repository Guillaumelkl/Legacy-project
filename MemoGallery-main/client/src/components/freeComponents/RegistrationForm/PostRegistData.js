import axios from "axios";

const PostRegistData = async (data) => {
  try {
    await axios.post("http://localhost:8080/register", data);
  } catch (error) {
    alert("Unable to Register...");
    console.log(error);
  }
};

export default PostRegistData;
