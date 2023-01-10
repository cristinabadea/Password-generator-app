<!-- @format -->

# Password-generator-app

## Description

I have created a Password geenrator app using JavaScript which will be used to generate a random password based on criteria stated below. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code found in script.js.

Criteria:

- A password is generated when the button is clicked
  - A series of prompts are presented to the user for password criteria
    - Length of password
      - At least 10 characters but no more than 64.
    - Character types
      - Lowercase
      - Uppercase
      - Numeric
      - Special characters ($@%&\*, etc)
  - Code validates for each input and at least one character type will be selected
  - Once prompts are answered then the password is generated and written to the page

![HTML Page & Console](./challenge/assets/Screenshot%202023-01-10%20at%2023.30.51.png)
![HTML Page & Console](./challenge/assets/Screenshot%202023-01-10%20at%2023.31.05.png)
![HTML Page & Console](./challenge/assets/Screenshot%202023-01-10%20at%2023.31.16.png)
![HTML Page & Console](./challenge/assets/Screenshot%202023-01-10%20at%2023.31.27.png)
![HTML Page & Console](./challenge/assets/Screenshot%202023-01-10%20at%2023.31.36.png)
![HTML Page & Console](./challenge/assets/Screenshot%202023-01-10%20at%2023.31.46.png)

## Installation

N/A

## Usage

- I first created the getPasswordOptions function which will return the user's choice regarding the type of character they wish to include in the password.

  ![JS-Code-snippet](./challenge/assets/Screenshot%202023-01-10%20at%2023.39.11.png)

- I then created the getRandom function which will get a random element from the pre-existing arrays with characters using the parameter arr.

  ![JS-Code-snippet](./challenge/assets/Screenshot%202023-01-10%20at%2023.39.21.png)

- Next, I generated the password using the generatePassword function which will save the password's lengh in a variable _passwordLength_, the user's option in another named _option_ and it will push the random elements into a new array, _pass_.

  ![JS-Code-snippet](./challenge/assets/Screenshot%202023-01-10%20at%2023.35.25.png)

## Credits

N/A

## License

MIT License

## Badges

N/A

## Features

N/A

## How to Contribute

N/A

## Tests

N/A

## Deployed website
