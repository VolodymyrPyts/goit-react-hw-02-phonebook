
import PropTypes from 'prop-types';


export const ContactItem = ({ id, name, number, onRemoveClick }) => {
  return (
    <>
      <span>{name}:</span>
      <span>{number}</span>
      <button type="button" onClick={() => onRemoveClick(id)}>
        Delete
      </button>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
};