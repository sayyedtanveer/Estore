EStore - Node.js and MySQL Project
This project is a web application built using Node.js, MySQL, and EJS for templating. It provides functionalities to display products and manage product details, with data stored in a MySQL database.

Prerequisites
Before you begin, ensure you have the following installed:

Node.js: JavaScript runtime for running the application.
npm: Node.js package manager.
MySQL: Database management system.
1. Check if Node.js is Installed
Open your command prompt or terminal and type:

bash
Copy code
node -v
If you see a version number, Node.js is installed. If not, follow the next steps to install it.

2. Install Node.js
If Node.js is not installed, download it from the official Node.js website. This installation will include both Node.js and npm.

3. Verify npm Installation
After installing Node.js, verify if npm is installed by running:

bash
Copy code
npm -v
This command should return the npm version.

4. Check Environment Variables (if npm is not recognized)
If npm is not recognized, the issue might be with the system’s PATH variable.

Go to Control Panel > System and Security > System > Advanced system settings.
Click on Environment Variables.
Under System Variables, find the Path variable, select it, and click Edit.
Ensure the path to Node.js (usually C:\Program Files\nodejs\) is included. If it’s missing, add it manually.
Restart your system and verify the installation by running node -v again.

Project Setup
1. Install Project Dependencies
Once Node.js is set up, navigate to the project directory and run:

bash
Copy code
npm install
This will install all the necessary dependencies listed in the package.json file.

2. Install MySQL
If MySQL is not installed on your system, download it from the official MySQL website. Follow the installation instructions to set up your database.

3. Set Up MySQL
After installing MySQL, run the following command to install the MySQL package required for Node.js:

bash
Copy code
npm install mysql2
4. Run the Project
After installing the dependencies, you can run the application using:

bash
Copy code
npm start
The application will start at http://localhost:4000/index.

MySQL Database Setup
Create a MySQL database for the project.
Use MySQL/MariaDB extension in VS Code to interact with your database.
Make sure the database credentials in your config or connection file match your local MySQL setup.
EJS Linting and Setup
Install EJS Lint globally:

bash
Copy code
npm install -g ejs-lint
To check the global npm packages:

bash
Copy code
npm list -g --depth=0
Navigate to the views folder and run the following command to check for issues in .ejs files:

bash
Copy code
npx ejs-lint views/**/*.ejs
You can also lint a specific file:

bash
Copy code
npx ejs-lint index.ejs
Useful Commands
Install the latest version of npm globally:

bash
Copy code
npm install -g npm@10.8.3
Run the application:

bash
Copy code
npm start
![image](https://github.com/user-attachments/assets/b1ba4c68-f410-46f3-88ec-67a91e053753)

![image](https://github.com/user-attachments/assets/7b2aabff-45f3-403d-bf83-26b0781e1a19)
![image](https://github.com/user-attachments/assets/59621dbf-4133-42af-9d0a-54233bd1fbbe)

