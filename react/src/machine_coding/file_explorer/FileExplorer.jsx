import React, { useEffect } from "react";

import { explorerData } from "./model/fileExplorerData.js";
import Folder from "./Folder";
import File from "./File";

const FileExplorer = () => {
  const files = explorerData["children"]["files"];
  const folders = explorerData["children"]["folder"];

  // Generating a array of files JSX to be displayed
  function allFilesHandler(allFiles) {
    return allFiles.map((file, idx) => (
      <File key={Math.random() * idx} name={file.name} />
    ));
  }

  // Generating a array of folder JSX to be displayed (BFS to store folder's children folderin that folder recursively)
  function allFoldersHandler(allFolders) {
    return allFolders.map((folder, idx) => (
      <Folder
        key={Math.random() * idx}
        name={folder["name"]}
        files={allFilesHandler(folder["children"]["files"])}
        folder={allFilesHandler(folder["children"]["folder"])}
      />
    ));
  }

  // Shwoing the initial root folder
  return (
    <Folder
      name={explorerData["name"]}
      files={allFilesHandler(files)}
      folder={allFoldersHandler(folders)}
    />
  );
};

export default FileExplorer;
