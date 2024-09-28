class FileNode {
  constructor(name, children = { files: [], folders: [] }) {
    this.name = name;
    this.children = { ...{ files: [], folders: [] }, ...children };
  }
}

const ReduxFolder = new FileNode("Redux");

ReduxFolder.children.files = ["index.js", "rootReducer.js", "store.js"];

ReduxFolder.children.folders = [
  new FileNode("ActionTypes", {
    files: ["actionTypes.js"],
    folders: [
      new FileNode("3rd Level Folder", {
        files: ["4th level file"],
        folders: [new FileNode("4th Level Folder")],
      }),
    ],
  }),
  new FileNode("ActionCreators", { files: ["actionCreators.js"] }),
  new FileNode("Reducers", { files: ["reducers.js"] }),
];

export default ReduxFolder;
