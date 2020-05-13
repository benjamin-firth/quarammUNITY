export const needsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SUBMIT_NEED' :
      return [...state, action.need];
    default:
      return state;
  }
}