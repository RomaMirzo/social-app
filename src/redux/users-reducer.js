const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
  users: [
    // { id: 1, photoUrl: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png', 
    // followed: false, fullName: 'Dmitry', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' } }, 

    // { id: 2, photoUrl: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png', 
    // followed: true, fullName: 'Roman', status: 'I am a boss too', location: { city: 'Kyiv', country: 'Ukraine' } }, 

    // { id: 3, photoUrl: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png', 
    // followed: false, fullName: 'Sasha', status: 'I am a boss too too', location: { city: 'Moscow', country: 'Russia' } }
  ]
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: 
      return { 
        ...state,
        users: state.users.map(user => {
          if(user.id === action.userId) return {...user, followed: true};
          return user;
        })
      }

    case UNFOLLOW: 
      return { 
        ...state,
        users: state.users.map(user => {
          if(user.id === action.userId) return {...user, followed: false};
          return user;
        })
      }

    case SET_USERS:
      return { ...state, users: [...state.users, ...action.users ] }

    default: return state;
  }
}

export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });

export default usersReducer;