import s from './MyPosts.module.css';
import Post from './Post/Post';
// s like styles

const MyPosts = (props) => {

  let postsElements = props.posts.map((p, i) => <Post message={p.message} likes={p.likesCount} key={i} />) 

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <button>Add post</button>
        <button>Post remove</button>
      </div>
      <div className={s.posts}>
        { postsElements }
      </div>
    </div>
  );
}

export default MyPosts;