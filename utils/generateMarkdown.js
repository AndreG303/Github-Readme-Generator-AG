

// function to generate markdown for README
function generateMarkdown(data, basename) {
  return `
# ${data.title}
## Author
${data.username}

# Table of contents
1. [Descriptionn](#Description)
2. [Installation](#Installation)
3. [Technology](#Technology)
5. [Usage](#Usage)
4. [License](#License)
5. [Contributing](#Contributing)
6. [Tests](#Tests)
7. [Questions](#Questions)

## About The Project 
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Technology

${data.technology}

## License
[![GitHub license](https://img.shields.io/github/license/${data.username}/${basename}.svg)](https://img.shields.io/github/license/${data.username}/${basename})

## Collaborators
${data.contributors}

## Tests
${data.tests}

## Questions
Please direct any questions or issues about this project to
${data.email}
`;

}

module.exports = generateMarkdown;
