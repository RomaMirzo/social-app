const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE'; 

let initialState = {
  dialogs: [ 
    {id: 1, name: 'Dima'}, 
    {id: 2, name: 'Roma'}, 
    {id: 3, name: 'Anton'}, 
    {id: 4, name: 'Sveta'}, 
  ],
  messages: [ 
    {id: 1, message: 'Hi!'}, 
    {id: 2, message: 'How is your IT?'}, 
    {id: 3, message: 'YO!'}, 
    {id: 4, message: 'Yo!'}, 
  ],
  newMessageBody: '',
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: 
      let newMessage = {
        id: 5,
        message: state.newMessageBody 
      };
      return {
        ...state,
        newMessageBody: '',
        messages: [ ...state.messages, newMessage ],
      };
    case UPDATE_NEW_MESSAGE_BODY: 
      return { 
        ...state,
        newMessageBody: action.body
      };
    default: return state;
  }
}


export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => 
({ type: UPDATE_NEW_MESSAGE_BODY, body });

export default dialogsReducer;