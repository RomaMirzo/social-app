import Friend from './Friend/Friend';

const Friends = (props) => {
  let friends = props.friends.map((f, i) => <Friend name={f.name} key={i} />);
  return (
    <div>
      <h3 style={{color:"white"}}>Friends</h3>

      <div className='friends__list'>
        { friends }
      </div>
    </div>
  );
}

export default Friends;