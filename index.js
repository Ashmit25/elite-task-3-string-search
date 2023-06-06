//A Node.js program that takes the string from a command-line argument
//searches for it in given file from github

const fetch = require('node-fetch');
var arguments = process.argv;

var searchFor = arguments[2];
var githubLink = 'https://gist.githubusercontent.com/GarvJain03/11979012b1f07395794148f9f7ab4b1c/raw/3431d292387c87aeb2175d8e1d44066ee5029068/example.txt';

const fetchText = async() => {
  try {
    const githubtext = await fetch(githubLink);
    var textdata = await githubtext.text();
    console.log(`you are searching for '${searchFor}'`);
    console.log('Result is as under: ')
    if (textdata.includes(searchFor)) {
        return true;
    } else {
        return false;
    }
   
  } catch (err) {
    console.log('fetch error', err);
  }
};

(async () => {
  const getText = await fetchText();
  console.log(getText)
})();



