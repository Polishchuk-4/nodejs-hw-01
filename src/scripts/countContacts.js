import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  const parsedData = JSON.parse(await readContacts());
  return parsedData.length;
};

console.log(await countContacts());
