import './style/App.scss';
import React, {useState} from "react";
import Card from "./component/Card"
import CompleteList from "./component/CompleteList"
import topicsList from "./data/topics";
import { HashRouter, Route, Switch} from "react-router-dom";

const initialTopic =   {
  title: "Shu ha Ri",
  category: "Bonnes pratiques",
};

function App() {

  const [topic, setTopic] = useState(initialTopic);

  return (
    <HashRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Card topic={topic} loadNewTopic={loadNewTopic}/>
          </Route>
          <Route path="/list" exact>
            <CompleteList topics={topicsList}/>
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );

  /**
   * Modifie le state pour lui injecter un nouveau sujet.
   */
  function loadNewTopic() {
    const topicsListSize = topicsList.length;
    const newTopicIndex = getRandomInt(topicsListSize);
    setTopic(topicsList[newTopicIndex]);
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}

export default App;
