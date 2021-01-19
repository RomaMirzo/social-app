import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
// s like styles
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/state';

const MyPosts = (props) => {

  let postsElements = props.posts.map((p, i) => <Post message={p.message} likes={p.likesCount} key={i} />) 

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostCreator());
  }

  let onChangePostText = () =>{
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextCreator(text));
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={ newPostElement } 
                    onChange={ onChangePostText }
                    value={ props.newPostText }/>
        </div>
        <button onClick={ addPost }>Add post</button>
        <button>Post remove</button>
      </div>
      <div className={s.posts}>
        { postsElements }
      </div>
    </div>
  );
}

export default MyPosts;