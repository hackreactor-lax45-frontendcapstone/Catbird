import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';
import { Container, Col, Row } from 'react-bootstrap';
import AnswerHelpfulness from './AnswerHelpfulness.jsx';
import axios from 'axios';
import { API_URL, API_KEY } from '../../../config/config.js';
import ImgEntry from '../individual-question/imgEntry.jsx';

const Answer = ( { answer, question_id, question_body } ) => {

var helpfulness = answer.helpfulness;
var addedHelpful = helpfulness;
const [ addHelpfulUsed, setaddHelpfulUsed ] = useState(false);

const [ reportClicked, setreportClicked ] = useState(false);


  const addHelpfulness = () => {
    setaddHelpfulUsed(true);

    if (!addHelpfulUsed) {
      /*
        SDC-Refactor
      */
      axios.put(`${'http://13.57.37.87:3000'}/qa/answers/${answer.answer_id}/helpful`, { helpful: 10 }, { headers: { Authorization: API_KEY} })
      .then(res => {
        addedHelpful = addedHelpful + 1;
      })
      .catch(err => console.log(err));
      /*
        SDC-Refactor
      */
    }
  }

  const reportAnswer = () => {
    setreportClicked(true);
      /*
        SDC-Refactor
      */
    axios.put(`${'http://13.57.37.87:3000'}/qa/answers/${answer.answer_id}/report`, { reported: true }, { headers: { Authorization: API_KEY} })
      .then(res => {
        alert('Thank you for your feedback!');
      })
      .catch(err => console.log(err));
      /*
        SDC-Refactor
      */
  }


  return(

  <div>
    <Row>
      <div
      className="answerList"
      data-testid="answerList"
      >
        <span className="qna-title">A:    </span><span className="qna-a">{answer.body}</span></div>
    </Row>
    <div className="photosRow">
      {answer.photos.map(photo => <ImgEntry photo={photo} key={photo.id}/>)}
    </div>
    <div className="stamps">
      <span className="answerStamp stamps">by {answer.answerer_name}</span>
        <span className="answerStamp stamps"><Moment format="MMM Do YYYY">{answer.date}</Moment>
      </span>
      <span className="stamps">
        <AnswerHelpfulness
          helpfulness={addedHelpful}
          addHelpfulUsed={addHelpfulUsed}
          addHelpfulness={addHelpfulness}
          reportAnswer={reportAnswer}
          reportClicked={reportClicked}
        />
      </span>

      <div></div>
      </div>

  </div>

  )

}

export default Answer;