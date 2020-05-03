# pecacm_frontend

## Steps to Run the code for the first time or whenever you take a Pull

1. ### Open a Terminal/Cmd in the project folder
2. ### Install the npm packages by running the following command <br> 
    `npm install`
    #### This step is very important. If you don't do this, you may run into error of missing dependencies
3. ### Start the server by running <br>
    `npm start`
4. ### A new window will open in your default browser at 
    > localhost:3000

<br>

## How to install a dependency and add it in package.json file

#### This will save the depedency in package.json file so that others can install it on their system before running the code.

1. ### run the following command to save a package as a dependency
    `npm install --save *dependency_name*`
    > These are those dependencies which are required at runtime as well as during development.
    

2. ### run the following command to save a package as a dev dependency
    `npm install --save-dev *dependency_name*`
    > These are those dependencies which are only required during development.