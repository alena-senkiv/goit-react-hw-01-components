import PropTypes from 'prop-types';
import defaultImg from 'img/defaultImg.png';
import s from './FriendListItem.module.css';

export const FriendListItem = ({ avatar = defaultImg, name, isOnline }) => {
  return (
    <li className={s.item}>
      <span className={`${isOnline ? s.online : s.ofline}`}></span>
      <img
        className={s.avatar}
        src={avatar ?? defaultImg}
        alt={name}
        width="48"
      />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
