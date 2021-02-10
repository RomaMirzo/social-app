import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';

const Profile = () => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
}

export default Profile;