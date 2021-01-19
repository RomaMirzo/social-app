const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE'; 

let store = { 
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'Hi, how are you?!', likesCount: 6}, 
        {id: 2, message: 'It`s my first post',  likesCount: 1}, 
      ],
      newPostText: 'privet',
    },
    dialogsPage: {
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
    },
    sidebar: {
      friends: [
        {id: 1, name: 'Roma'},
        {id: 2, name: 'Dima'},
        {id: 3, name: 'Anton'},
      ]
    }
  },
  _callSubscriber() {},

  getState() {
    return this._state;
  },
  subscribe(observer)  {
    this._callSubscriber = observer; // паттерн observer
  },

  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    };
  
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  sendMessage() {
    let newMessage = {
      id: 5,
      message: this._state.dialogsPage.newMessageBody 
    };
    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessageBody = '';
    this._callSubscriber(this._state);
  },
  updateMessageBody(body) {
    this._state.dialogsPage.newMessageBody = body;
    this._callSubscriber(this._state);
  },

  dispatch(action) {
    switch (action.type) {
      case ADD_POST:
        this.addPost();
        break;
      case UPDATE_NEW_POST_TEXT:
        this.updateNewPostText(action.newText);
        break;
      case UPDATE_NEW_MESSAGE_BODY:
        this.updateMessageBody(action.body);
        break;
      case SEND_MESSAGE: 
        this.sendMessage();
        break;
      default: console.log('failed dispatch type');
    }
  }
}

export const addPostCreator = () => ({ type: ADD_POST });
export const updateNewPostTextCreator = (text) => 
({ type: UPDATE_NEW_POST_TEXT, newText: text });

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => 
({ type: UPDATE_NEW_MESSAGE_BODY, body });

export default store;