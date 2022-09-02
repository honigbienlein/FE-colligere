import React, { useEffect, useState } from "react";
import "../css/menu.css";
import { NavLink, useLocation, useParams } from "react-router-dom";
import Scan from "./Scan";

export default function Menu({ setScannedData }) {
  const [showScanner, setShowScanner] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const { collectionId } = useParams();
  //console.log(collectionId)
  let mainMenu = true;
  const location = useLocation();
  //console.log(location)
  if (location.pathname === `/collections/${collectionId}`) {
    mainMenu = false;
  }
  //console.log(mainMenu)

  function handleTemplate(event) {
    //add classname for highlishting clicked template
    setIsActive((current) => !current);
    //get name of template for adding to collection
    const templateName = event.target.dataset.value;
    return templateName;
  }

  function saveCollection() {
    //add collection to overview
  }

  useEffect(() => {
    const backdrops = document.querySelectorAll("dialog::backdrop");

    backdrops.forEach((element) => {
      element.addEventListener("click", (event) => (event.target.open = false));
    });
  }, []);

  useEffect(() => {
    if (showScanner) {
      document.getElementById("addItem").showModal();
    }
  }, [showScanner]);

  /* TBD: Correct links of the Navlinks */
  return (
    <>
      {/* Overlay for adding a collection */}
      <dialog id="addCollection">
        <h1>Your new collection</h1>
        <h4>Choose a template:</h4>
        <div className="addtemplates">
          <label
            onClick={handleTemplate}
            className={
              isActive ? "addtemplate highlightSelectedTemplate" : "addtemplate"
            }
            data-value="books"
          >
            Books
          </label>
        </div>
        <div onClick={saveCollection} className="addbutton">
          <button>Add</button>
        </div>
      </dialog>

      {/* Overlay for adding an item to a collection */}
      {showScanner ? (
        <>
          <dialog id="addItem" onClose={() => setShowScanner(false)}>
            <h1>Your new item</h1>
            <h4>Scan your barcode</h4>
            <Scan setScannedData={setScannedData} collectionId={collectionId} />
          </dialog>
        </>
      ) : null}

      {/* Menu bar */}
      <div className="menu">
        {mainMenu ? (
          <NavLink to="/settings">
            <img src="/images/settings.svg" alt="settings" />
          </NavLink>
        ) : (
          <NavLink to="/">
            <img src="/images/goback.svg" alt="goback" />
          </NavLink>
        )}
        {mainMenu ? (
          <img
            onClick={() => document.getElementById("addCollection").showModal()}
            src="/images/plus.svg"
            alt="plus"
          />
        ) : (
          <img
            onClick={() => {
              setShowScanner(true);
            }}
            src="/images/plus.svg"
            alt="plus"
          />
        )}
        <NavLink to="/searchbar">
          <img src="/images/magnifyingglass.svg" alt="magnifyingglass" />
        </NavLink>
      </div>
    </>
  );
}
