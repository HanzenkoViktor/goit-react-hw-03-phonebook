import { ListOfContact, Container } from './ContactsList.styled';
import { PropTypes } from 'prop-types';
import ContactListItem from './ContactItem/ContactItem';

const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <Container>
      <h2>My contacts</h2>
      <ListOfContact>
        {contacts.map(({ name, number, id }) => (
          <ContactListItem
            deleteContact={deleteContact}
            name={name}
            number={number}
            id={id}
            key={id}
          />
        ))}
      </ListOfContact>
    </Container>
  );
};

ContactsList.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
