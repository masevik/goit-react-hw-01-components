import PropTypes from 'prop-types';
import { Title, Item, Label, Percentage } from './Statistics.styled';
import { Box } from '../Box';

export const Statistics = ({ title, stats }) => {
  return (
    <Box
      display="block"
      width="300px"
      height="184px"
      bg="background"
      m="0px auto 10px"
      color="text"
      borderRadius="4px"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.15)"
      as="section"
    >
      <Title>{title.toUpperCase()}</Title>
      <Box
        display="flex"
        height="92px"
        bg="secondaryBackground"
        borderRadius="4px"
        as="ul"
      >
        {stats.map(item => (
          <Item key={item.id}>
            <Label>{item.label}</Label>
            <Percentage>{item.percentage}</Percentage>
          </Item>
        ))}
      </Box>
    </Box>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
