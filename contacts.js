const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.resolve("db", "contacts.json");

const getContactsList = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

const getContactById = async (contactId) => {
  const contacts = await getContactsList();
  const res = contacts.find((contact) => contact.id === contactId);
  return res || null;
};

// TODO: задокументувати кожну функцію
const removeContact = async (contactId) => {
  console.log("Видалити контакт");
};

const addContact = async (name, email, phone) => {
  console.log("Додати контакт");
};

module.exports = {
  getContactsList,
  getContactById,
  removeContact,
  addContact,
};
