const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

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

const addContact = async ({ name, email, phone }) => {
  const contacts = await getContactsList();
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
};

const removeContact = async (contactId) => {
  const contacts = await getContactsList();
  const index = contacts.findIndex((contact) => contact.id === contactId);
  if (index === -1) return null;
  const [res] = contacts.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return res;
};

module.exports = {
  getContactsList,
  getContactById,
  addContact,
  removeContact,
};
