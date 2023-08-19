import PropTypes from 'prop-types';
import {
  Avatar,
  Card,
  ListItem,
  Quantity,
  Stats,
  UserInfo,
  UserName,
  UserWrapper,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Card>
      <UserWrapper>
        <Avatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserInfo>@{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </UserWrapper>

      <Stats>
        <ListItem>
          <span>Followers</span>
          <Quantity>{followers}</Quantity>
        </ListItem>
        <ListItem>
          <span>Views</span>
          <Quantity>{views}</Quantity>
        </ListItem>
        <ListItem>
          <span>Likes</span>
          <Quantity>{likes}</Quantity>
        </ListItem>
      </Stats>
    </Card>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
