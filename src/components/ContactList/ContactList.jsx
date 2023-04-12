import { useDispatch, useSelector } from 'react-redux';
import { getError, getIsLoading } from '../../redux/selectors';
import { useEffect } from 'react';
import { fetchContacts, deleteContact } from 'redux/operations';
import { List, Button, Item, Text } from './ContactListStyled';

const ContactList = () => {
  const { contacts, filter } = useSelector(state => state);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    const normilizedFilter = filter.toLowerCase().trim();
    return contacts.items.filter(contact => {
      return contact.name.toLowerCase().includes(normilizedFilter);
    });
  };

  const filterName = getVisibleContacts();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <List>
        {filterName.map(({ id, name, phone }) => (
          <Item key={id}>
            <Text>
              {name}: {phone}
            </Text>
            <Button type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </Button>
          </Item>
        ))}
      </List>
    </div>
  );
};

export default ContactList;
