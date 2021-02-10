import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

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

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
}

export default store;