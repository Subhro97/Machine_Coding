import { useReducer } from "react";

import { CommentNode } from "./modal/comments";

function commentReducerHandler(state, action) {
  switch (action.type) {
    case "ADD_COMMENT": {
      const newReplies = [...state.repliesList];

      newReplies.unshift(
        <Comment
          key={`${action.payload.substring(0, 10)}`}
          text={action.payload}
        />
      );
      return {
        ...state,
        repliesList: newReplies,
      };
    }
    case "SHOW_REPLIES": {
      return {
        ...state,
        showReplies: !state.showReplies,
      };
    }
    case "SHOW_INPUT": {
      return {
        ...state,
        addCommentInput: action.payload,
      };
    }
  }
}

const Comment = ({ text, replies = [] }) => {
  const [commentState, dispatchAction] = useReducer(commentReducerHandler, {
    repliesList: replies,
    showReplies: true,
    addCommentInput: false,
  });

  const toggleCommentReplies = () => {
    dispatchAction({ type: "SHOW_REPLIES" });
  };

  const addCommentHandler = (e) => {
    const comment = e.target.value.trim();

    if (e.key === "Enter") {
      dispatchAction({ type: "SHOW_INPUT", payload: false });
      dispatchAction({ type: "ADD_COMMENT", payload: comment });
    }
  };

  return (
    <div className="comment-wrap">
      <div className="comment-content">
        <p>{text}</p>
        <div className="comment-actions">
          {commentState.repliesList.length > 0 && (
            <button onClick={toggleCommentReplies}>Show Replies</button>
          )}
          <button
            onClick={() =>
              dispatchAction({ type: "SHOW_INPUT", payload: true })
            }
          >
            Add Reply
          </button>
        </div>
      </div>
      {commentState.addCommentInput && (
        <input
          type="text"
          autoFocus
          onBlur={() => dispatchAction({ type: "SHOW_INPUT", payload: false })}
          onKeyUp={addCommentHandler}
        />
      )}
      {commentState.showReplies && (
        <div className="comment-replies">
          {commentState.repliesList && commentState.repliesList}
        </div>
      )}
    </div>
  );
};

export default Comment;
