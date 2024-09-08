import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const existingData = await readContacts();
    const parsedData = JSON.parse(existingData) || [];

    const updateData = [...parsedData, createFakeContact()];
    await writeContacts(JSON.stringify(updateData));
  } catch (e) {
    console.error(e);
  }
};

addOneContact();
