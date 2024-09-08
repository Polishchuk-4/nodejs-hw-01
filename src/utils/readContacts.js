import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
// import fs from 'node:fs';

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    return data;
  } catch (err) {
    console.error(err);
  }
  //   fs.readFile(PATH_DB, 'utf-8', (err, fileContent) => {
  //     if (err) {
  //       throw err;
  //     }
  //     console.log(fileContent);
  //   });
};

readContacts();
