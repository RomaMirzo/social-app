import Friend from './Friend/Friend';
// import s from './Friends.module.css';

const Friends = (props) => {
  let friends = props.state.friends.map((f, i) => <Friend state={f.name} key={i} />);

  return (
    <div>
      <h3>Friends</h3>

      <div className='friends__list'>
        { friends }
      </div>
    </div>
  );
}

export default Friends;