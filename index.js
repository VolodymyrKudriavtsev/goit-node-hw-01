const contacts = require("./contacts");
const { Command } = require("commander");

const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contactsList = await contacts.getContactsList();
      console.table(contactsList);
      break;

    case "get":
      const singleContact = await contacts.getContactById(id);
      console.log(singleContact);
      break;

    case "add":
      const addedContact = await contacts.addContact({ name, email, phone });
      console.log(addedContact);
      break;

    case "remove":
      const removedContact = await contacts.removeContact(id);
      if (!removedContact) return console.log(null);
      console.log("The remove operation was successful");
      console.log(removedContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(options);
