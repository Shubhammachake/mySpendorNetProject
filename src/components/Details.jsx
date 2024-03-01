import { useState, useEffect } from "react";
import { getDetails } from "../../users";

export default function Details() {
  const details = getDetails();

  const [detailData, setDetailData] = useState({});
  useEffect(() => {
    setDetailData(details);
  }, []);

  console.log(details);
  return (
    <div className="container">
      <h1>Details</h1>
      {detailData.console == undefined &&
      detailData.author == undefined &&
      detailData.title == undefined ? (
        <p>no data found</p>
      ) : (
        <>
          <img src={detailData.coverImage} alt="error" />
          <h2>{detailData.title}</h2>
          <h3>detailData.Author</h3>
        </>
      )}
    </div>
  );
}
