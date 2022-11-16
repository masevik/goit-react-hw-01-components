import PropTypes from 'prop-types';
import {
  ColumnsTitle,
  ColumnsRow,
  ColumnsRowInfo,
} from './TransactionHistory.styled';
import { Box } from '../Box';

export const TransactionHistory = ({ items }) => {
  return (
    <Box
      width="500px"
      height="500px"
      bg="background"
      m="0px auto 10px"
      color="text"
      borderRadius="4px"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.15)"
      as="table"
    >
      <thead>
        <tr>
          <ColumnsTitle>Type</ColumnsTitle>
          <ColumnsTitle>Amount</ColumnsTitle>
          <ColumnsTitle>Currency</ColumnsTitle>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <ColumnsRow key={item.id}>
            <ColumnsRowInfo>{item.type}</ColumnsRowInfo>
            <ColumnsRowInfo>{item.amount}</ColumnsRowInfo>
            <ColumnsRowInfo>{item.currency}</ColumnsRowInfo>
          </ColumnsRow>
        ))}
      </tbody>
    </Box>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
