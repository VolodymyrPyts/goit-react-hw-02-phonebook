import PropTypes from 'prop-types';
import { Box } from 'components/theme/Box';

import { ContactItem } from "./ContactItem/ContactItem";

export const ContactCard = ({ contacts, onRemoveClick }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <Box as="li" mb={3} key={id}>
          <ContactItem
            id={id}
            name={name}
            number={number}
            onRemoveClick={onRemoveClick}
          />
        </Box>
      ))}
    </ul>
  );
};

ContactCard.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRemoveClick: PropTypes.func.isRequired,
};