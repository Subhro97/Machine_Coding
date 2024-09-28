export class CommentNode {
  constructor(text, replies = []) {
    this.text = text;
    this.replies = replies;
  }
}

export const commentData = new CommentNode("Comment1", [
  new CommentNode("Comment 2"),
  new CommentNode("Comment 3"),
]);
