import { Component } from 'react';
import { Form, Input, Button } from './ContactForm.styled';
import PropTypes from 'prop-types';

const shortid = require('shortid');
const inputNameId = shortid.generate();
const inputNumberId = shortid.generate();
const buttonId = shortid.generate();

class ContactForm extends Component {
  static propTypes = {
    onSubmitForm: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handelInputChange = event => {
    this.setState({ [event.target.name]: event.currentTarget.value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handelSubmit = event => {
    event.preventDefault();
    const isIncludes = this.props.onSubmitForm(this.state);
    if (isIncludes) return;
    this.reset();
  };

  render() {
    return (
      <Form onSubmit={this.handelSubmit}>
        <label htmlFor={inputNameId}>
          <span>Name</span>
        </label>
        <Input
          autoComplete="off"
          type="text"
          name="name"
          id={inputNameId}
          value={this.state.name}
          onChange={this.handelInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <label htmlFor={inputNumberId}>
          <span>Number</span>
        </label>
        <Input
          type="tel"
          name="number"
          id={inputNumberId}
          value={this.state.number}
          onChange={this.handelInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <label htmlFor={buttonId}>
          <Button type="submit" id={buttonId}>
            Add contact
          </Button>
        </label>
      </Form>
    );
  }
}

export default ContactForm;
