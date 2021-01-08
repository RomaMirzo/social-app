import s from './Post.module.css';
// s like styles

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png' alt='user'/>
      {props.message}
      <div>
        <span>{props.likes} Like</span>
      </div>
    </div>
  );
}

export default Post;