import { Link, useNavigate } from "react-router-dom";
import myDb from "/myDb";
import { useEffect, useState } from "react";
import {
  addAllUsers,
  addIndex,
  getAllIndex,
  getDetails,
  addDetails,
} from "../../users";

export default function BookLists() {
  const [data, setData] = useState([]);

  const details = getDetails();

  useEffect(() => {
    setData(myDb);
  }, []);
  addAllUsers(data);
  console.log(data);

  const handleDelete = (ind) => {
    const updt = [...data];
    updt.splice(ind, 1);
    setData(updt);
  };
  const navigate = useNavigate();

  const handleEdit = (val) => {
    navigate("/EditDetails");
    addIndex(val);
  };

  const handleChange = (e) => {
    let key = e.target.value.toLowerCase();

    if (key !== "") {
      let filter = data.filter((item) => {
        return (
          item.title.toLowerCase().includes(key) ||
          item.author.toLowerCase().includes(key)
        );
      });
      setData(filter);
    } else {
      setData(myDb);
    }
  };

  const handleDetails = (ind) => {
    navigate("/Details");
    addDetails(data[ind]);
  };
  return (
    <>
      <h1>Search Books</h1>
      <br />
      <input
        type="text"
        placeholder="Search Book"
        className="inpt"
        onChange={(e) => handleChange(e)}
      />
      <br />
      <Link to="AddBooks">
        <button className="btn">Add Books</button>
      </Link>
      <br />
      <br />
      <br />
      <div className="grid-cont">
        {data.map((item, index) => (
          <div className="grid-item" key={index}>
            <img src={item.coverImage} alt="error" />
            <h3>{item.title}</h3>
            <h4>{item.author}</h4>
            <div className="btns">
              <button className="btn" onClick={() => handleEdit(index)}>
                Edit
              </button>
              <button className="btn" onClick={() => handleDelete(index)}>
                Delete
              </button>
              <button className="btn" onClick={() => handleDetails(index)}>
                Detail
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
