

export const qnaListReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_QUESTION_LIST':
      return action.questionList;
  default:
    return state;
  }
};


export const productIdReducer = (state = '', action) => {
  switch (action.type) {
    case 'CURRENT_PRODUCT_ID':
      return action.product_id;
    default:
       return state;
  }
}

// export const answerReducer = (state = [], action) => {
//    switch (action.type) {
//      case 'FETCH_ANSWER_LIST':
//        return action.answerList;
//      default:
//        return state;
//    }
// }

// export const openAddQuestionModalReducer = (state = false, action) => {
//   switch (action.type) {
//     case 'OPEN_ADD_QUESTION':
//       return !state;
//     default:
//       return state;
//   }
// }

export const addAnswerModalIsOpenReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_ADD_ANSWER':
      return !state;
    default:
      return state;
  }
}

export const addQuestionModalIsOpenReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_ADD_QUESTION':
      return !state;
    default:
      return state;
  }
}

export const productNameReducer = (state = '', action) => {
  switch (action.type) {
    case 'GET_PRODUCT_NAME':
      return action.product_name;
    default:
      return state;
  }
}



export const searchBarInputReducer = (state = '', action) => {
  switch (action.type) {
    case 'SEARCHBAR_INPUT':
      return action.searchBarInput;
    default:
      return state;
  }
}

export const answer_idReducer = (state='', action) => {
  switch (action.type) {
    case 'GET_ANSWER_ID':
      return action.answer_id;
    default:
      return state;
  }
}

// export const markHelpfulReducer = (state='', action) => {
//   switch (action.type) {
//     case 'MARK_HELPFULL':
//       return action.markHelpful;
//     default:
//       return state;
//   }
// }


export const markAnswerHelpfulReducer = (state='', action) => {
  switch (action.type) {
    case 'HELPFUL':
      return action.helpful;
    default:
      return state;
  }
}

// export const isAnswerMarkedHelpfulReducer = (state=false, action) => {
//   switch (action.type) {
//     case 'ANSWER_HELPFUL_CLICKED':
//       return true;
//     default:
//       return state;
//   }
// }