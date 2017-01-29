

export default {
    receiveContacts: () => {
        ContactsAPI
            .getContacts('http://localhost:3001/api/contacts')
            .then(contacts => {
                AppDispatcher.dispatch({
                    actionType: ContactConstants.RECEIVE_CONTACTS,
                    contacts: contacts
                });
            })
            .catch(message => {
                AppDispatcher.dispatch({
                    actionType: ContactConstants.RECEIVE_CONTACTS_ERROR,
                    message: message
                });
            });
    },

    getContact: (id) => {
        .getContact('http://localhost:3001/api/contacts/' + id)
            .then(contact => {
                AppDispatcher.dispatch({
                    actionType: ContactConstants.RECEIVE_CONTACT,
                    contact: contact
                });
            })
            .catch(message => {
                AppDispatcher.dispatch({
                    actionType: ContactConstants.RECEIVE_CONTACT_ERROR,
                    message: message
                });
            });
    }
}
