import React from 'react';
import CardHeader from "./CardHeader";

export default function Card({topic, loadNewTopic}) {
    return (
        <div className="Card">
          <CardHeader category={topic.category}/>
          <div className="Card__body">
            <h2 className="Card__body-text">
              {topic.title}
            </h2>
          </div>
          <div className="Card__action-container">
            <button className="Card__action" onClick={loadNewTopic}>Nouveau sujet</button>
          </div>
        </div>
    );
}
