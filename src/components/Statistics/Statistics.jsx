import PropTypes from 'prop-types';
import {} from './Statistics.styled';
import { Box } from '../Box';

export const Statistics = ({ title, stats: { id, label, percentage } }) => {
  return (
    <Box
      display="block"
      width="300px"
      height="400px"
      bg="background"
      m="0px auto 10px"
      color="text"
      borderRadius="4px"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.15)"
      as="div"
    >
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        <li className="item">
          <span className="label">.docx</span>
          <span className="percentage">4%</span>
        </li>
        <li className="item">
          <span className="label">.mp3</span>
          <span className="percentage">14%</span>
        </li>
        <li className="item">
          <span className="label">.pdf</span>
          <span className="percentage">41%</span>
        </li>
        <li className="item">
          <span className="label">.mp4</span>
          <span className="percentage">12%</span>
        </li>
      </ul>
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
