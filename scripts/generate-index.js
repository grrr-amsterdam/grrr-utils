/* eslint-disable no-console */

const fs = require('fs');
const path = require('path');

const INDEX_FILE_PATH = 'index.mjs';
const FUNCTIONS_DIRECTORY = './functions';

const stream = fs.createWriteStream(INDEX_FILE_PATH);
const files = fs.readdirSync(FUNCTIONS_DIRECTORY);

stream.once('open', () => {
  console.log(`Generating: ${INDEX_FILE_PATH}`);
  files.forEach(file => {
    const { name } = path.parse(file);
    console.log(`Adding: ${name}`);
    stream.write(`export { default as ${name} } from '${FUNCTIONS_DIRECTORY}/${name}';\n`);
  });
  stream.end();
});
