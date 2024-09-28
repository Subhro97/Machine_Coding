import { useReducer } from "react";

import File from "./File";

const folderReducerHandler = (state, action) => {
  switch (action.type) {
    case "ADD_FILE": {
      const clonedArr = [...state.filesList];

      clonedArr.push(
        <File
          key={`${action.payload}-${Math.floor(Math.random() * 100)}`}
          name={action.payload}
        />
      );

      return {
        ...state,
        filesList: clonedArr,
      };
    }
    case "ADD_FOLDER": {
      const clonedArr = [...state.folderList];

      clonedArr.push(
        <Folder
          key={`${action.payload}-${Math.floor(Math.random() * 100)}`}
          name={action.payload}
        />
      );

      return {
        ...state,
        folderList: clonedArr,
      };
    }
    case "ADD_MORE_STATE": {
      return {
        ...state,
        addMore: action.payload,
      };
    }
    case "ADD_TYPE": {
      return {
        ...state,
        type: action.payload,
      };
    }
  }
};

const Folder = ({ name, files = [], folders = [] }) => {
  const [folderState, dispatchAction] = useReducer(folderReducerHandler, {
    filesList: files,
    folderList: folders,
    addMore: false,
    type: null,
  });

  const addMoreHandler = (type) => {
    dispatchAction({ type: "ADD_MORE_STATE", payload: true });
    dispatchAction({ type: "ADD_TYPE", payload: type });
  };

  const addItemHandler = (e) => {
    const name = e.target.value;

    if ((e.key === "Enter" || e.type === "blur") && name.trim().length !== 0) {
      const type = folderState.type;

      if (type === "file") {
        dispatchAction({ type: "ADD_FILE", payload: name });
      } else {
        dispatchAction({ type: "ADD_FOLDER", payload: name });
      }

      dispatchAction({ type: "ADD_MORE_STATE", payload: false });
      dispatchAction({ type: "ADD_TYPE", payload: null });
    }
  };

  return (
    <>
      <div className="folder">
        <span>{name}</span>
        <div className="folder-btns">
          <button onClick={() => addMoreHandler("folder")}>+ Folder</button>
          <button onClick={() => addMoreHandler("file")}>+ File</button>
        </div>
      </div>
      {(files || folders) && (
        <div className="subSection">
          {folderState.addMore && (
            <input
              type="text"
              onKeyUp={addItemHandler}
              onBlur={addItemHandler}
              autoFocus
            />
          )}
          {folderState.folderList}
          {folderState.filesList}
        </div>
      )}
    </>
  );
};

export default Folder;
