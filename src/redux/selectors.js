export const getContactsApi = ({contacts}) => contacts.items;
export const getFilteredContacts = ({contacts}) => contacts.filter;
export const getStateContacts = ({contacts}) => ({loading: contacts.loading, error: contacts.error})