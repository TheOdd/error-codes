// Basic reducer to handle one action (UPDATE_TEXT)

const rootReducer = (state = {text: ''}, action) => {
  switch (action.type) {
    case 'UPDATE_TEXT':
      return {
        text: action.text
      }
    default:
      return state;
  }
}

export default rootReducer;
