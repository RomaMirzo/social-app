import s from './Friend.module.css';

const Friend = (props) => {
  return (
    <div className={s.friend}>
      <img src='https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png' alt='friend logo' />
      <div>
        {props.state}
      </div>
    </div>
  );
}

export default Friend;