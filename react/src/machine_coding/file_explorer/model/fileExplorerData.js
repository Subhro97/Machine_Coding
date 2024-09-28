export class FileStruct {
  constructor(name) {
    this.id = Math.random() * 1000;
    this.name = name;
    this.type = "File";
  }
}

export class FolderStruct {
  constructor(name, children = { files: [], folder: [] }) {
    this.id = Math.random() * 1000;
    this.name = name;
    this.type = "Folder";
    this.children = children;
  }
}

export const explorerData = new FolderStruct("React", {
  files: [new FileStruct("index.jsx"), new FileStruct("App.jsx")],
  folder: [new FolderStruct("node_modules"), new FolderStruct("src")],
});
