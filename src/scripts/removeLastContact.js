import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const getData = await readContacts();
    const parsedData = JSON.parse(getData);
    parsedData.splice(parsedData.length - 1, 1);
    const stringifyData = JSON.stringify(parsedData);
    await writeContacts(stringifyData);

    // const getParsedData = JSON.parse(await readContacts());
    // getParsedData.splice(getParsedData.length - 1, 1);
    // await writeContacts(JSON.stringify(getParsedData));
  } catch (e) {
    console.error(e);
  }
};

removeLastContact();
