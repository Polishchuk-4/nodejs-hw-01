import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const newContacts = [];
  for (let i = 1; i <= number; i++) {
    newContacts.push(createFakeContact());
  }
  try {
    const existingData = await readContacts();
    const parsedData = JSON.parse(existingData) || [];
    const updateData = [...parsedData, ...newContacts];
    await writeContacts(JSON.stringify(updateData));
  } catch (e) {
    console.error(e);
  }
};

generateContacts(1);
