import { connect } from 'react-redux';
import Friends from './Friends';

// const Friends = (props) => {
//   let friends = props.state.friends.map((f, i) => <Friend state={f.name} key={i} />);

//   return (
//     <div>
//       <h3>Friends</h3>

//       <div className='friends__list'>
//         { friends }
//       </div>
//     </div>
//   );
// }

let mapStateToProps = (state) => {
  return {
    friends: state.sidebar.friends
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

const FriendsContainer = connect(mapStateToProps)(Friends);

export default FriendsContainer;