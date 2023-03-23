const contacts = require("./contacts");

// contacts.getContactsList();
// contacts.getContactById();
// contacts.removeContact();
// contacts.addContact();

// const { Command } = require("commander");
// const program = new Command();
// program
//   .option("-a, --action <type>", "choose action")
//   .option("-i, --id <type>", "user id")
//   .option("-n, --name <type>", "user name")
//   .option("-e, --email <type>", "user email")
//   .option("-p, --phone <type>", "user phone");

// program.parse(process.argv);

// const argv = program.opts();

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

    // TODO: рефакторить
    // case "add":
    //   // ... name email phone
    //   break;

    // case "remove":
    //   // ... id
    //   break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

// invokeAction(argv);

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "AeHIrLTr6JkxGE6SN-0Rw" });
invokeAction({ action: "get", id: "AeHIrLTr6JkxGE6SN-0Rw" });
