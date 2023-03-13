import { PropTypes } from 'prop-types';
import { ContactItem, Button } from './ContactItem.styled';

const ContactListItem = ({ name, number, deleteContact, id }) => {
  return (
    <ContactItem>
      <p>
        {name}: {number}
      </p>

      <Button onClick={() => deleteContact(id)} title="Delete contact">
        Delete
      </Button>
    </ContactItem>
  );
};

ContactListItem.prototype = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
