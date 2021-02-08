const { createStore } = require("redux");
const { composeWithDevTools } = require("redux-devtools-extension");

const initailState = {
  contact: [],
  selected: {},
};
const contactReducer = (state = initailState, action) => {
  console.log(action);
  switch (action.type) {
    case "CONTACT_DETAILS":
      return {
        ...state,
        contact: [...state.contact, action],
      };
    case "EDIT_CONTACT":
      let arr = state.contact.filter((contact) => contact.id == action.id);
      arr = arr.values();
      console.log(arr);
      for (let val of arr) {
        arr = val;
      }
      return {
        ...state,
        selected: arr,
      };
    case "UPDATE_CONTACT":
      return {
        ...state,
        contact: state.contact.map((data) =>
          data.id == action.id ? action : data
        ),
      };
    case "DELETE_CONTACT":
      return {
        ...state,
        contact: state.contact.filter((data) => data.id !== action.id),
      };
    default:
      return state;
  }
};
const store = createStore(contactReducer, composeWithDevTools());
export default store;
