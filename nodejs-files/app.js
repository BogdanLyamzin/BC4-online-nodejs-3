const fs = require("fs").promises;
const path = require("path");
// 
const contacts = "files/contacts.json";

const newContact = {
    "name":"Allen Raymond",
    "email":"nulla.ante@vestibul.co.uk",
    "phone":"(992) 914-3792"};

const fileRead = fs.readFile(contacts, "utf8");
 
fileRead.then(data => {
    const oldContacts = [...JSON.parse(data)];
    const lastId = oldContacts[oldContacts.length - 1].id;
    
    const newProducts = [...JSON.parse(data), {...newContact, id: lastId + 1}];
    fs.writeFile(contacts, JSON.stringify(newProducts));
})

fs.appendFile(contacts, `${JSON.stringify(newContact)} \n`)