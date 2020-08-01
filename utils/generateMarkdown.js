// function to generate markdown for README
function generateMarkdown(data,basename) {
  return `
# ${data.title}
## Author
${data.github}

## About The Project 
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Technology
${data.technology}

## License
${data.license}
[![GitHub license](https://img.shields.io/github/license/${data.username}/${basename}.svg)](https://img.shields.io/github/license/${data.username}/${basename})

`;

}

module.exports = generateMarkdown;
