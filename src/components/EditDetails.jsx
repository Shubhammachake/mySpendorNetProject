import { useState } from "react";
import { addAllUsers, getAllUsers, addIndex, getAllIndex } from "../../users";
import { useNavigate } from "react-router-dom";
export default function EditDetails() {
  const myData = getAllUsers();
  const myInd = getAllIndex();
  const [data, setData] = useState({
    title: "",
    author: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const navigate = useNavigate();
  const handleSave = (ind) => {
    if (data.title !== "" && data.author !== "") {
      alert(`${myData[ind].title},"sucessfully Updated"`);
      navigate("/");
      myData[ind].title = data.title;
      myData[ind].author = data.author;
    } else {
      navigate("/");
    }
  };
  return (
    <div className="cont">
      <h1>Edit Details</h1>
      <form onSubmit={() => handleSave(myInd)}>
        <input
          type="text"
          placeholder="Enter Title"
          name="title"
          onChange={(e) => handleChange(e)}
          required
        />
        <br />
        <input
          type="text"
          placeholder="Enter Author"
          name="author"
          onChange={(e) => handleChange(e)}
          required
        />
        <br />
        <button type="submit" className="btn">
          Save Book
        </button>
      </form>
    </div>
  );
}
