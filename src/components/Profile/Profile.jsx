import PropTypes from 'prop-types';
import {
  ProfileImage,
  Name,
  Tag,
  Location,
  StatsItem,
  StatsLabel,
  StatsValue,
} from './Profile.styled';
import { Box } from '../Box';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      width="300px"
      height="400px"
      bg="background"
      m="0px auto 10px"
      color="text"
      borderRadius="normal"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.15)"
      as="div"
    >
      <Box paddingTop="32px" textAlign="center">
        <ProfileImage src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Box>

      <Box display="flex" width="100%">
        <StatsItem>
          <StatsLabel>Followers</StatsLabel>
          <StatsValue>{followers}</StatsValue>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Views</StatsLabel>
          <StatsValue>{views}</StatsValue>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Likes</StatsLabel>
          <StatsValue>{likes}</StatsValue>
        </StatsItem>
      </Box>
    </Box>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
