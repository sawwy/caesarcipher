import React from "react";

const renderSentences = strings =>
  strings.map(sentence => {
    return (
      <li key={sentence} className="sentence">
        {sentence}
      </li>
    );
  });

const Messages = props => {
  return (
    <div className="message-board">
      <h4 className="header">
        <i
          className={props.className}
          style={{
            color: props.color,
            paddingRight: "10px"
          }}
        />
        {props.header}
      </h4>
      <ol>{renderSentences(props.messages)}</ol>
    </div>
  );
};

export default Messages;
