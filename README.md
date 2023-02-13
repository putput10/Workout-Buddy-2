# WorkoutBuddy

## Description
The workoutBuddy App allows you to create a customer profile with your workout preferences ( i.e. cardio,  olympic_weightlifting, plyometrics) and recommend workouts to accomplish in one session. Aditionally, you can also post your comments about the workout into a blog so you can receive support and challenge from other users

There are three endpoints for you to return data from the workoutBuddy app

| Request | Endpoint | Description | 
| ------------- | ------------- | ------------- |
| `GET` | /api/***workoutPref***  | Sends a GET request to return all the instances of each ***workoutPref*** ( products/categories/tags) |
| `GET` | /api/***user***/***id*** | Sends a GET request to return specific ***user*** data filtered by the id |
| `POST` | /api/***post*** | Sends a POST request to create a new entry for the ***post*** |

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Prerequisites
* Since this is a node.js app, you will need to install node.js in your laptop.  
    * Download the latest version of node.js here --> https://nodejs.org/en/download/  
* After node.js has been installed on your machine, you will need to install npm.  
    * Follow the steps in the following website to install npm --> https://docs.npmjs.com/cli/v9/commands/npm-install?v=true  
* You will also need to have installed mySQL. 
    * Follow the steps in the following website to install npm --> https://www.mysql.com/


## Installation
* Download the repo
* Navigate to the `internetRetail` folder
* Install the prerequesites by running:
        
        npm i 
* Open `mysql` by running the following command: 

        mysql -u root -p
* Once inside of mysql, run the following command to create the squema
        
        source schema.sql
* Exit out of mysql by running

        exit 


### Create your model and seed it
* Install the prereques by running:
        `npm run seed`
        
* Start your server by running:
`nodemon server.js`


        `nodemon server.js`

## Usage
* When entering the application you will be directed to the welcome page.

* If you are a new user, click the sign up button to be redirected to the sign up page.

* For a returning user, click the login button to be redirected to the login page.

* Once logged in the user will be redirected to the posts page.

* To create a post enter a Title in the corresponding text-box, then type in your content into the text area. When finished click the "Post!" button.

* To logout off a user's account, navigate to the logout link in the Navigation bar on the top-left of the page.

* Once logged out the user will be redirected to the welcome page. 

## Screenshots

![image](https://user-images.githubusercontent.com/114193157/218567659-931abc94-53e0-4355-98c2-b1a2fd7adddd.png)

![image](https://user-images.githubusercontent.com/114193157/218568281-61658423-f6df-415b-80aa-b0619b0caba3.png)

![image](https://user-images.githubusercontent.com/114193157/218568460-72259aa1-11d9-4491-9f1a-40543d45eb6c.png)

        
## Credits
[Beto De Amras](https://github.com/nosbeto)
[Charles Putney](https://github.com/putput10)

## License
MIT License

Copyright (c) [2023] [WorkoutBuddy]

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
SOFTWARE.s
