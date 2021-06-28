import PropTypes from 'prop-types';
import defaultImg from 'img/defaultImg.png';

export const FriendListItem = ({ avatar = defaultImg, name, isOnline }) => {
  return (
    <li class="item">
      <span class="status"></span>
      <img class="avatar" src={avatar} alt="" width="48" />
      <p class="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
