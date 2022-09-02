import React, { useRef } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import "../css/addItem.css";

export default function AddItem({ scannedData }) {
  const { collectionId } = useParams();
  const navigate = useNavigate();

  const titleRef = useRef();
  const subtitleRef = useRef();
  const authorsRef = useRef();
  const pagesRef = useRef();
  const publishDateRef = useRef();
  const publishersRef = useRef();
  const commentRef = useRef();
  const statusRef = useRef();

  function saveItem() {
    console.log(titleRef.current?.value);
    //TBD: Change route
    axios.post("/addItem", {
      data: {
        cover: scannedData.cover,
        title: titleRef,
        subtitle: subtitleRef,
        authors: authorsRef,
        pages: pagesRef,
        isbn_10: scannedData?.isbn_10,
        isbn_13: scannedData?.isbn_13,
        publishers: scannedData.publishers,
        publish_date: scannedData.publish_date,
        /* comment: , */
      },
    });
    //TBD navigate to the corresponding collection
    navigate(`/collections/${collectionId}`);
  }

  if (!scannedData) {
    <p>hoppla</p>;
  }
  return (
    <>
      <div className="addItem">
        <div className="addItemLeft">
          <img src={scannedData.cover} />
        </div>
        <div className="addItemRight">
          <h4>Have I read this?</h4>
          <div className="addItemRightStatus">
            <div className="addItemRightStatus">
              <input ref={titleRef} type="radio" name="status" />
              <img src="/images/yes.png" />
            </div>
            <div className="addItemRightStatus">
              <input ref={titleRef} type="radio" name="status" />
              <img src="/images/no.png" />
            </div>
          </div>
          <h4>Title</h4>
          <input ref={titleRef} type="text" defaultValue={scannedData.title} />
          <h4>Subtitle</h4>
          <textarea
            ref={subtitleRef}
            rows="2"
            cols="4"
            defaultValue={scannedData.subtitle}
          />
          <h4>Author(s)</h4>
          <input
            ref={authorsRef}
            type="text"
            defaultValue={scannedData.authors}
          />
          <h4>Pages</h4>
          <input ref={pagesRef} type="text" defaultValue={scannedData.pages} />
          <h4>Publish Date</h4>
          <input
            ref={publishDateRef}
            type="text"
            defaultValue={scannedData.publish_date}
          />
          <h4>Publishers</h4>
          <input
            ref={publishersRef}
            type="text"
            defaultValue={scannedData.publishers}
          />
          <h4>ISBN</h4>
          <input
            type="text"
            disabled
            defaultValue={scannedData.isbn_10 ?? scannedData.isbn_13}
          />
          <h4>Comment</h4>
          <textarea ref={commentRef} rows="4" cols="6" defaultValue={null} />
        </div>
        <button onClick={saveItem} className="addItemBottom">
          Save
        </button>
      </div>
    </>
  );
}
