import PropTypes from 'prop-types';
import s from './Profile.module.css';

const defaultImg =
  'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg';

export const Profile = ({
  avatar = defaultImg,
  username,
  tag,
  location,
  stats,
}) => {
  const { followers, views, likes } = stats;
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar ?? defaultImg} alt={username} className={s.avatar} />
        <p className={s.name}>{username}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.statsItem}>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{followers}</span>
        </li>
        <li className={s.statsItem}>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{views}</span>
        </li>
        <li className={s.statsItem}>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
