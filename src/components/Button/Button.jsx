import StyledButton from './StyledButton';
import PropTypes from 'prop-types';

const Button = ({ handleLoadMore }) => {
  return (
    <StyledButton type="button" onClick={handleLoadMore}>
      Load more
    </StyledButton>
  );
};

export default Button;

Button.propTypes = {
  handleLoadMore: PropTypes.func.isRequired,
};
