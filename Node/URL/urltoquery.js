const { parse } = require("url")

const urlQuery = parse("https://medium.com/@JavaScript-World/node-js-url-module-parsing-and-manipulating-urls-ff48777d1994", true)
console.log(urlQuery);
console.log(urlQuery.query);
