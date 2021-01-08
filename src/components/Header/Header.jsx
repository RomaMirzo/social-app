import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIeS9qhRY8m3uQ5fNWdIKzjj_Cjb2O7JLAmA&usqp=CAU' alt="logo" />
  </header>
  );
}

export default Header;