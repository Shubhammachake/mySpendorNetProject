import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllUsers } from "../users";
export default function AddBooks() {
  const myData = getAllUsers();
  const [data, setData] = useState({
    title: "",
    author: "",
    coverImage: "",
  });

  let regX = /^(ftp|http|https):\/\/[^ "]+$/;
  const [urlError, setUrlError] = useState("");
  const isValidUrl = (val) => {
    return regX.test(val);
  };
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "coverImage") {
      if (!isValidUrl(value)) {
        setUrlError("please enter valid Url");
      } else {
        setUrlError("");
      }
    }

    setData((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const handleAdd = (e) => {
    alert("book is Added");
    myData.unshift(data);
    navigate("/");
  };
  return (
    <div className="cont">
      <h1>Add Book</h1>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Title"
          name="title"
          onChange={(e) => handleChange(e)}
          className="inpt"
          required
        />
        <br />
        <input
          type="text"
          placeholder="Author"
          name="author"
          onChange={(e) => handleChange(e)}
          className="inpt"
          required
        />
        <br />
        <input
          type="url"
          placeholder="Enter Url"
          name="coverImage"
          onChange={(e) => handleChange(e)}
          className="inpt"
          required
        />
        {urlError && (
          <span>
            {" "}
            <p>{urlError}</p>
          </span>
        )}
        <br />
        <button className="btn" type="submit">
          ADD BOOK
        </button>
      </form>
    </div>
  );
}
