import React, { useState } from 'react';

const Statistics = ({ good,neutral,bad }) =>{
  let sum = good+neutral+bad;
let average = (good-bad)/sum;
let positive = (good/sum)*100;

  if(good!==0 || neutral!==0 || bad!==0){
    return(
    <div>
      <h2>statistics</h2>
      <table height="100px" width="150px" className="table table-bordered table-dark table-hover"> 
      <tr>
        <td>good</td>
        <td>{good}</td>
      </tr>
      <tr>
        <td>neutral</td>
        <td>{neutral}</td>
      </tr>
      <tr>
        <td>bad</td>
        <td>{bad}</td>
     </tr>
     <tr>
        <td>all</td>
        <td>{sum}</td>
     </tr>
     <tr>
       <td>average</td>
       <td>{average.toFixed(1)}</td>
    </tr>
     <tr>
       <td>positive</td>
       <td>{positive.toFixed(1)}%</td>
    </tr>
      </table>
    </div>
  )
  }
  else{
    return(
      <div>
       <p>No feedback given</p> 
      </div>
    )
  }
  

};

const Button = ({ handleClick }) => {
return(
  <div className="btn-group">
    <button className="btn btn-success" onClick={() => handleClick("good")}>good</button>
    <button className="btn btn-warning" onClick={() => handleClick("neutral")}>neutral</button>
    <button className="btn btn-danger" onClick={() => handleClick("bad")}>bad</button>
  </div>
)
};

const App = () => {
  /*
const [ feedback, setFeedback ] = useState({
  good:0, neutral:0, bad:0
}); 

  const handleFeed = (feed) => {
    if(feed === "good"){
      const newFeed = {
        ...feedback,
        good: feedback.good + 1
      };
      setFeedback(newFeed);
    }
    else if(feed === "neutral"){
      const newFeed = {
        ...feedback,
        neutral: feedback.neutral + 1
      };
      setFeedback(newFeed);
    }
    else{
      const newFeed = {
        ...feedback,
        bad: feedback.bad + 1
      };
      setFeedback(newFeed);
    }
  };
  */

  const [ goodFeed, setGood ] = useState(0);
  const [ neutralFeed, setNeutral ] = useState(0);
  const [ badFeed, setBad ] = useState(0);

  const handleFeed = (feed) => {
    if(feed === "good"){
      setGood(goodFeed + 1);
    }
    else if(feed === "neutral"){
      setNeutral(neutralFeed + 1);
    }
    else{
      setBad(badFeed + 1);
    }
  };

  return (
    <div className="container pt-3">
      <h2>give feedback</h2>
      <Button handleClick={handleFeed}/>
      <Statistics good={goodFeed} neutral={neutralFeed} bad={badFeed}/>
    </div>
  )
}

export default App;
