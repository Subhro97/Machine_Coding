import File from "./File";
import Folder from "./Folder";

import ReduxFolder from "./model/filesData";

import "./FileExplorer.css";

const FileExplorer = () => {
  const foldersList = function (node) {
    const folderArr = [];

    for (let i = 0; i < node.children.folders.length; i++) {
      let name = node.children.folders[i].name;

      folderArr.push(
        <Folder
          key={`name-${Math.floor(Math.random() * 100)}`}
          name={name}
          files={filesList(node.children.folders[i])}
          folders={foldersList(node.children.folders[i])}
        />
      );
    }

    return folderArr;
  };

  const filesList = function (node) {
    const fileArr = [];

    for (let i = 0; i < node.children.files.length; i++) {
      let name = node.children.files[i];
      fileArr.push(
        <File key={`name-${Math.floor(Math.random() * 100)}`} name={name} />
      );
    }

    return fileArr;
  };

  return (
    <Folder
      name={ReduxFolder.name}
      folders={foldersList(ReduxFolder)}
      files={filesList(ReduxFolder)}
    />
  );
};

export default FileExplorer;
