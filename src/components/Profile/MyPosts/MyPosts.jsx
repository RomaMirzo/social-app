import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props.posts.map((p, i) => <Post message={p.message} likes={p.likesCount} key={i} />) 

  let onAddPost = () => {
    props.addPost();
    // props.dispatch(addPostCreator());
  }

  let onPostChange = (event) =>{
    let text = event.target.value;
    props.onChangePostText(text);
    // props.dispatch(updateNewPostTextCreator(text));
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={ onPostChange }
                    value={ props.newPostText }/>
        </div>
        <button onClick={ onAddPost }>Add post</button>
        <button>Post remove</button>
      </div>
      <div className={s.posts}>
        { postsElements }
      </div>
    </div>
  );
}

export default MyPosts;