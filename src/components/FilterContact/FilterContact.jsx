import PropTypes from 'prop-types';


export const FilterContact = ({ value, onChange }) => (
  <>
    <h3>Find contacts by name</h3>
    <input type="text" value={value} onChange={onChange} />
  </>
);

FilterContact.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};