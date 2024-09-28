import Comment from "./Comment";

import { commentData } from "./modal/comments";

import "./CommentBox.css";

const CommentBox = () => {
  const { text, replies } = commentData;

  function repliesHandler(replies) {
    return replies.map((comment, idx) => (
      <Comment
        key={`${comment.text.substring(0, 10)}`}
        text={comment.text}
        replies={repliesHandler(comment.replies)}
      />
    ));
  }

  return <Comment text={text} replies={repliesHandler(replies)} />;
};

export default CommentBox;
