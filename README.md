# ClinicWire


## Description 

This application allows users to schedule appointments at clinics using a provided Clinic ID.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Finished Project](#finished-project)
* [Credits](#credits)
* [License](#license)

## Installation

To use this application, run 'npm install' to install all of the packages listed as dependencies for both the server and React.

## Usage 

The user must run `npm start` in order to start both the express server and React simultaneously. A post request for `api/clinic/` must then be made to create a sample clinic for navigating the application. After creating the sample clinic, the user can then sign up for a new account or login if an account was already created. After accessing an account, the user will be taken to the dashboard, where the main functionality of the application can be accessed.


Instead of running locally, the application can also be ran here:
 * [ClinicWire](https://clinic-wire.herokuapp.com/)
 
 Sample Clinic ID for Deployed Website: `5fb0370ffbbe7a002aa85f36`

## Finished Project

![ClinicWire](https://user-images.githubusercontent.com/67942678/99420372-20e0af00-28cb-11eb-83dd-a8824da8bf1b.gif)

## Credits

* [React](https://reactjs.org/)
* [Node.js](https://nodejs.org/en/)
* [Express](https://www.npmjs.com/package/express)
* [Mongoose](https://mongoosejs.com/)
* [MongoDB](https://www.mongodb.com/)

## License

MIT License

&copy; 2020, Kai Reid

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.