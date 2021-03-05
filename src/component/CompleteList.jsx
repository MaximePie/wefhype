import React from 'react';

export default function CompleteList({topics}) {
  return (
    <div className="CompleteList">
      {topics?.map((topic, index) => (
        <p key={index} className="CompleteList__topic">
          <h4 className="CompleteList__wording">
            {topic.title}
          </h4>
          <span className="CompleteList__category">
            {topic.category}
          </span>
        </p>
      ))}
    </div>
  );
}
