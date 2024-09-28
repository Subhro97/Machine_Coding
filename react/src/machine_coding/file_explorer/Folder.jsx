import React, { useReducer, useRef } from "react";

import "./FileExplorer.css";
import File from "./File";

const explorerReducerHandler = (state, action) => {
  switch (action.type) {
    case "ADD_NEW_FOLDER": {
      const newFolderList = [...state.foldersList];

      newFolderList.push(
        <Folder
          key={`${action.payload}-${Math.floor(Math.random() * 100)}`}
          name={action.payload}
        />
      );
      return {
        ...state,
        foldersList: newFolderList,
      };
    }
    case "ADD_NEW_FILE": {
      const newFileList = [...state.filesList];

      newFileList.push(
        <File
          key={`${action.payload}-${Math.floor(Math.random() * 100)}`}
          name={action.payload}
        />
      );
      return {
        ...state,
        filesList: newFileList,
      };
    }

    case "ADD_NEW": {
      return {
        ...state,
        addNew: true,
        type: action.payload,
      };
    }

    case "RESET": {
      return {
        ...state,
        addNew: false,
        type: null,
      };
    }

    default:
      return state;
  }
};

const Folder = ({ name, files = [], folder = [] }) => {
  const [explorerState, dispatchAction] = useReducer(explorerReducerHandler, {
    filesList: files,
    foldersList: folder,
    addNew: false,
    type: null,
  });

  const inputRef = useRef(null);

  const addItemHandler = (e) => {
    const name = e.target.value;

    if ((e.key === "Enter" || e.type === "blur") && name.trim().length !== 0) {
      if (explorerState.type === "folder")
        dispatchAction({ type: "ADD_NEW_FOLDER", payload: name.trim() });
      else dispatchAction({ type: "ADD_NEW_FILE", payload: name.trim() });

      inputRef.current.value = "";
      dispatchAction({ type: "RESET" });
    }
  };

  return (
    <div className="folder-cont">
      <div className="folder-details">
        <div className="folder-name-cont">
          <div className="folder-icon">📁</div>
          <div className="folder-name">{name}</div>
        </div>
        <div className="folder-btns">
          <button
            onClick={() =>
              dispatchAction({ type: "ADD_NEW", payload: "folder" })
            }
          >
            + Folder
          </button>
          <button
            onClick={() => dispatchAction({ type: "ADD_NEW", payload: "file" })}
          >
            + File
          </button>
        </div>
      </div>

      <div className="folder-children">
        {explorerState.addNew && (
          <input
            ref={inputRef}
            onBlur={(e) =>
              e.target.value.trim().length !== 0
                ? addItemHandler(e)
                : dispatchAction({ type: "RESET" })
            }
            onKeyUp={addItemHandler}
            className="add-new-input"
            type="text"
            autoFocus
          />
        )}
        {explorerState.foldersList}
        {explorerState.filesList}
      </div>
    </div>
  );
};

export default Folder;
