import PropTypes from 'prop-types';

const defaultImg =
  'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg';

export const Profile = ({
  avatar = defaultImg,
  name,
  tag,
  location,
  stats,
}) => {
  const { followers, views, likes } = stats;
  return (
    <div class="profile">
      <div class="description">
        <img
          src={avatar ?? defaultImg}
          alt="Аватар пользователя"
          class="avatar"
        />
        <p class="name">{name}</p>
        <p class="tag">{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
