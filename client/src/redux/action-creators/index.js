/* eslint-disable camelcase */
import axios from 'axios';
import { API_KEY, API_URL } from '../../config/config';

/*
  ACTION CREATORS
*/

export const fetchQuestionList = (product_id, page, count) => (dispatch) => {
  /*
      SDC-Refactor
  */
  axios.get(`${'http://13.57.37.87:3000'}/qa/questions`, {
    headers: { Authorization: API_KEY, 'Content-Type': 'application/json', 'access-control-allow-origin': '*' },
    params: {
    // product_id: product_id,
      product_id: 16056,
      page,
      count,
    },
  })
    .then((result) => {
      dispatch({
        type: 'FETCH_QUESTION_LIST',
        questionList: result.data.results,
      });
    })
    .catch((err) => console.log('error from axios call fetchQuestionList', product_id, err));
};

export const fetchAnswerList = (question_id, page, count) => axios.get(
  `${'http://13.57.37.87:3000'}/qa/questions/${question_id}/answers`,
  {
    headers: { Authorization: API_KEY, 'Content-Type': 'application/json', 'access-control-allow-origin': '*' },
    params: {
      page,
      count,
    },
  },
);

export const getProductName = (product_id) => (dispatch) => {
  axios.get(`${'http://13.57.37.87:3000'}/products/${16056}`, {
    headers: { Authorization: API_KEY, 'Content-Type': 'application/json', 'access-control-allow-origin': '*' },
  })
    .then((result) => {
      dispatch({
        type: 'GET_PRODUCT_NAME',
        product_name: result.data.name,
      });
    })
    .catch((err) => {
      console.log('this is the error from axios request to get product name', err)
    });
};

export const markQuestionHelpful = (question_id) => axios.put(
  `${'http://13.57.37.87:3000'}/qa/questions/${question_id}/helpful`,
  {},
  {
    headers: { Authorization: API_KEY, 'Content-Type': 'application/json', 'access-control-allow-origin': '*' },
  },
);

export const updateOutfitList = (outfit) => (dispatch) => {
  dispatch({
    type: 'UPDATE_OUTFIT_LIST',
    payload: outfit,
  });
};
