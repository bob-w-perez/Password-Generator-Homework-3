# Password-Generator-Homework-3

This project was to make a a random password generator where the user can choose the criteria (length and which types of characters to use) and then have the program display the password. The design and layout was provided as base code; the project consisted of programming the functionality in JavaScript. The requirements stated that we had to use prompt and confirm messages to take the user input, however these are clunky and take away from user experience so I made an alternate version that uses toggle switches to take the user input (accessed at [https://github.com/bob-w-perez/Alt-HW3](https://github.com/bob-w-perez/Alt-HW3) for github repo, [https://bob-w-perez.github.io/Alt-HW3/](https://bob-w-perez.github.io/Alt-HW3/).
## Installation

No installation required.
Go to [https://bob-w-perez.github.io/Password-Generator-Homework-3/](https://bob-w-perez.github.io/Password-Generator-Homework-3/) to use the application.

The code and all relevant files can be found at [https://github.com/bob-w-perez/Password-Generator-Homework-3](https://github.com/bob-w-perez/Password-Generator-Homework-3). 

## Usage

- Class version:

![screenshot-demo](./assets/images/function-example.gif "Functional Demo")

- Alternate version:

![screenshot-demo](./assets/images/function-example2.gif "Functional Demo")



## Features
- allows user to select any of the following character classes for their password: 

<html>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- lowercase letters</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- uppercase letters</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- numbers</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- special characters</p>
</html>
 
- password will always have at least one character from each  selected class
- password must be 8 to 128 characters in length, other inputs will prompt the user to retry
- optional *EXTRA* feature allows user to make inputs via toggle selector instead of alert boxes (accessed at [https://github.com/bob-w-perez/Alt-HW3](https://github.com/bob-w-perez/Alt-HW3) for github repo, [https://bob-w-perez.github.io/Alt-HW3/](https://bob-w-perez.github.io/Alt-HW3/) for deployed page)


## Selected Code

The generatePassword() function has 2 empty arrays, one is added to using concat to give an array with all characters from selected character classes and the other uses push to make it an array with each element an array. The first is used to randomly generate potential passwords, then the second array is used to check if the potential passwords contain at least one character from each selected class. 

![screenshot-demo](./assets/images/code-snippet-1.png "code-1")
<hr>

![screenshot-demo](./assets/images/code-snippet-2.png "code-2")
<hr>

![screenshot-demo](./assets/images/code-snippet-3.png "code-3")


## Contributing
Solo project for GATech Coding Bootcamp

## License
MIT License

Copyright (c) 2021 Robert Perez

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.