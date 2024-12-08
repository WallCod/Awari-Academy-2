const url = require('url');

const baseUrl = 'https://www.example.com/path/';

const relativeUrl = '../otherpath/page.html';

const resolvedUrl = url.resolve(baseUrl, relativeUrl);

console.log(`URL resolvida: ${resolvedUrl}`);